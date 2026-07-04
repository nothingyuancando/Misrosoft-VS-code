const http = require("http");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");

const root = path.resolve(__dirname, "..");
const startPort = Number(process.env.PORT || 8000);

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".txt": "text/plain; charset=utf-8"
};

function send(res, status, body, type = "text/plain; charset=utf-8") {
  res.writeHead(status, {
    "Content-Type": type,
    "Cache-Control": "no-store"
  });
  res.end(body);
}

function safePath(requestPath) {
  const decoded = decodeURIComponent(requestPath);
  const cleanPath = decoded === "/" ? "/微软大战代码_HTML原型/index.html" : decoded;
  const filePath = path.normalize(path.join(root, cleanPath));
  if (!filePath.startsWith(root)) return null;
  return filePath;
}

function createServer() {
  return http.createServer((req, res) => {
    const requestUrl = new URL(req.url, "http://127.0.0.1");
    const filePath = safePath(requestUrl.pathname);
    if (!filePath) {
      send(res, 403, "Forbidden");
      return;
    }

    fs.stat(filePath, (statError, stat) => {
      if (statError) {
        send(res, 404, "Not found");
        return;
      }

      const target = stat.isDirectory() ? path.join(filePath, "index.html") : filePath;
      fs.readFile(target, (readError, data) => {
        if (readError) {
          send(res, 404, "Not found");
          return;
        }

        const type = contentTypes[path.extname(target).toLowerCase()] || "application/octet-stream";
        send(res, 200, data, type);
      });
    });
  });
}

function listen(port) {
  const server = createServer();
  server.once("error", (error) => {
    if (error.code === "EADDRINUSE") {
      listen(port + 1);
      return;
    }
    console.error(error);
    process.exit(1);
  });
  server.listen(port, "127.0.0.1", () => {
    const url = `http://127.0.0.1:${port}/`;
    console.log("");
    console.log("微软大战代码已启动");
    console.log(`打开地址：${url}`);
    console.log("按 Ctrl+C 停止游戏服务");
    console.log("");
  });
}

listen(startPort);
