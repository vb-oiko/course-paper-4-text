import intro from "./source/intro.md";
import chapter1 from "./source/chapter1.md";

const app = document.getElementById("app");

const sections = [intro, chapter1];

sections.forEach((section) => {
  const el = document.createElement("p");
  el.innerHTML = section;
  el.childNodes[0].childNodes.forEach((node) => app.appendChild(node));
});
