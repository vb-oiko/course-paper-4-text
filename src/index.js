import intro from "./source/intro.md";
import chapter1 from "./source/chapter1.md";
import chapter2 from "./source/chapter2.md";
import chapter3 from "./source/chapter3.md";
import chapter4 from "./source/chapter4.md";
import chapter5 from "./source/chapter5.md";
import chapter6 from "./source/chapter6/chapter6.md";
import chapter611 from "./source/chapter6/chapter61/chapter611.md";
import chapter612 from "./source/chapter6/chapter61/chapter612.md";
import chapter613 from "./source/chapter6/chapter61/chapter613.md";
import chapter614 from "./source/chapter6/chapter61/chapter614.md";
import chapter615 from "./source/chapter6/chapter61/chapter615.md";

import "./style.css";

const app = document.getElementById("app");

const sections = [
  //
  // intro,
  // chapter1,
  // chapter2,
  // chapter3,
  // chapter4,
  // chapter5,
  chapter6,
  chapter611,
  chapter612,
  chapter613,
  chapter614,
  chapter615,
];

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
