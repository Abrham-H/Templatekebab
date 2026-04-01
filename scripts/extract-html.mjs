import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");

const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
if (!styleMatch) throw new Error("No <style> block");
const style = styleMatch[1].trim();

let body = html.match(/<body>([\s\S]*?)<\/body>/)[1];
body = body.replace(/<script>[\s\S]*?<\/script>/, "").trim();

fs.mkdirSync(path.join(root, "app"), { recursive: true });
fs.mkdirSync(path.join(root, "lib"), { recursive: true });

fs.writeFileSync(path.join(root, "app", "globals.css"), style);
fs.writeFileSync(
  path.join(root, "lib", "body.html.ts"),
  `export const bodyHtml = ${JSON.stringify(body)};\n`
);

console.log("Extracted app/globals.css and lib/body.html.ts");
