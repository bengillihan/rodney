// Minimal static file server for Railway (no dependencies).
"use strict";
const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const PORT = Number(process.env.PORT) || 3000;
const TYPES = {
  ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8",
  ".json": "application/json", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp",
  ".svg": "image/svg+xml", ".ico": "image/x-icon", ".mp3": "audio/mpeg", ".m4a": "audio/mp4", ".ogg": "audio/ogg",
  ".md": "text/markdown; charset=utf-8", ".txt": "text/plain; charset=utf-8",
};
const PUBLIC = new Set([".html", ".css", ".js", ".png", ".jpg", ".jpeg", ".webp", ".svg", ".ico", ".mp3", ".m4a", ".ogg", ".md", ".txt"]);
const BLOCKED = new Set(["server.js", "package.json"]);
// Cache-busting: index.html references styles.css?v=__BUILD__ etc. Each deploy gets a new id,
// so CDN-cached copies of old CSS/JS are never paired with new HTML.
const BUILD = (process.env.RAILWAY_GIT_COMMIT_SHA || Date.now().toString(36)).slice(0, 10);

http.createServer((req, res) => {
  let rel;
  try { rel = decodeURIComponent(new URL(req.url, "http://x").pathname); } catch { res.writeHead(400).end(); return; }
  if (rel.endsWith("/")) rel += "index.html";
  const file = path.normalize(path.join(ROOT, rel));
  const ext = path.extname(file).toLowerCase();
  if (!file.startsWith(ROOT + path.sep) || rel.split("/").some((p) => p.startsWith(".")) ||
      !PUBLIC.has(ext) || BLOCKED.has(path.relative(ROOT, file))) {
    res.writeHead(404, { "Content-Type": "text/plain" }).end("Not found");
    return;
  }
  fs.stat(file, (err, st) => {
    if (err || !st.isFile()) { res.writeHead(404, { "Content-Type": "text/plain" }).end("Not found"); return; }
    const headers = {
      "Content-Type": TYPES[ext] || "application/octet-stream",
      "Content-Length": st.size,
      "Cache-Control": ext === ".html" ? "no-cache" : "public, max-age=3600",
      "X-Content-Type-Options": "nosniff",
    };
    if (path.relative(ROOT, file) === "index.html") {
      fs.readFile(file, "utf8", (e, html) => {
        if (e) { res.writeHead(500).end(); return; }
        const body = Buffer.from(html.replace(/__BUILD__/g, BUILD));
        headers["Content-Length"] = body.length;
        res.writeHead(200, headers).end(req.method === "HEAD" ? undefined : body);
      });
      return;
    }
    if (req.method === "HEAD") { res.writeHead(200, headers).end(); return; }
    res.writeHead(200, headers);
    fs.createReadStream(file).pipe(res);
  });
}).listen(PORT, "0.0.0.0", () => console.log(`Rodney Rathbone for the Defense on :${PORT}`));
