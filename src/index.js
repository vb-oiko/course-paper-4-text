import intro from "./source/intro.md";
import chapter1 from "./source/chapter1.md";

import "./style.css";

const app = document.getElementById("app");

const sections = [intro, chapter1];

sections.forEach((section) => {
  const el = document.createElement("p");
  el.innerHTML = section;
  el.childNodes[0].childNodes.forEach((node) => app.appendChild(node));
});

import { Previewer } from "pagedjs";

let paged = new Previewer();
let flow = paged
  .preview(document.querySelector("#app").innerHTML, ["/src/style.css"])
  .then((flow) => {
    console.log("Rendered", flow.total, "pages.");
  });
