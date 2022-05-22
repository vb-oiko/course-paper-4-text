import intro from "./source/intro.md";
import chapter1 from "./source/chapter1.md";
import chapter2 from "./source/chapter2.md";
import chapter3 from "./source/chapter3.md";
import chapter4 from "./source/chapter4.md";
import chapter5 from "./source/chapter5.md";
import chapter6 from "./source/chapter6/chapter6.md";
import chapter61 from "./source/chapter6/chapter61/chapter61.md";
import chapter611 from "./source/chapter6/chapter61/chapter611.md";
import chapter612 from "./source/chapter6/chapter61/chapter612.md";
import chapter613 from "./source/chapter6/chapter61/chapter613.md";
import chapter614 from "./source/chapter6/chapter61/chapter614.md";
import chapter615 from "./source/chapter6/chapter61/chapter615.md";
import chapter62 from "./source/chapter6/chapter62/chapter62.md";
import chapter621 from "./source/chapter6/chapter62/chapter621.md";
import chapter622 from "./source/chapter6/chapter62/chapter622.md";
import chapter623 from "./source/chapter6/chapter62/chapter623.md";
import chapter63 from "./source/chapter6/chapter63/chapter63.md";
import chapter631 from "./source/chapter6/chapter63/chapter631.md";
import chapter632 from "./source/chapter6/chapter63/chapter632.md";
import chapter633 from "./source/chapter6/chapter63/chapter633.md";
import chapter64 from "./source/chapter6/chapter64/chapter64.md";
import chapter641 from "./source/chapter6/chapter64/chapter641.md";
import chapter642 from "./source/chapter6/chapter64/chapter642.md";
import chapter643 from "./source/chapter6/chapter64/chapter643.md";
import chapter644 from "./source/chapter6/chapter64/chapter644.md";
import chapter645 from "./source/chapter6/chapter64/chapter645.md";
import chapter7 from "./source/chapter7.md";
import conclusion from "./source/conclusion.md";

import "./style.css";

const app = document.getElementById("app");

const sections = [
  //
  intro,
  // chapter1,
  // chapter2,
  // chapter3,
  // chapter4,
  // chapter5,
  // chapter6,
  // chapter61,
  // chapter611,
  // chapter612,
  // chapter613,
  // chapter614,
  // chapter615,
  // chapter62,
  // chapter621,
  // chapter622,
  // chapter623,
  // chapter63,
  // chapter631,
  // chapter632,
  // chapter633,
  // chapter64,
  // chapter641,
  // chapter642,
  // chapter643,
  // chapter644,
  // chapter645,
  // chapter7,
  // conclusion,
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
