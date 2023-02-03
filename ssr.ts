/// <reference types="node" />
import App from "./src/App.svelte"
import { readFileSync, writeFileSync } from "fs"

let ssg = App.render()
let text = readFileSync("index.html").toString();
let globalcss = readFileSync("global.css").toString();
text = text.replace("<!--MX_STYLE-->", `<style>${ssg.css.code}</style>\n<style>${globalcss}</style>`)
    .replace("<!--MX_HTML-->", ssg.html);
writeFileSync("index.html", text);
