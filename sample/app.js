import { element } from "../lib/domliner.js";

document.addEventListener("DOMContentLoaded", () => {
  content.appendChild(
    element("p", null, [
      "This is made by ",
      element("strong", null, "DOMLiner"),
    ])
  );
  content.appendChild(
    element("p", null, [
      "DOMLiner is available on ",
      element("a", { href: "https://github.com/SaschaNaz/DOMLiner" }, "GitHub"),
    ])
  );
});
