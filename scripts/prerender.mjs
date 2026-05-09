import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "..", "dist");

const ROUTES = [
  "/",
  "/book-appointment",
  "/privacy-policy",
  "/terms-and-conditions",
  "/a2p",
];

const templatePath = path.join(distDir, "index.html");
const template = fs.readFileSync(templatePath, "utf8");

const entryServerPath = path.join(distDir, "server", "entry-server.js");
const { render } = await import(pathToFileURL(entryServerPath).href);

const ROOT_RE = /<div id="root"><\/div>/;

for (const route of ROUTES) {
  const appHtml = render(route);
  const html = template.replace(ROOT_RE, `<div id="root">${appHtml}</div>`);

  if (route === "/") {
    fs.writeFileSync(path.join(distDir, "index.html"), html, "utf8");
  } else {
    const outDir = path.join(distDir, route.replace(/^\//, ""));
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, "index.html"), html, "utf8");
  }
}

console.log("[prerender] Wrote:", ROUTES.join(", "));
