///<reference path="../domliner.ts" />
declare var content: HTMLDivElement;
var liner = new DOMLiner(document);

document.addEventListener("DOMContentLoaded", () => {
    content.appendChild(
        liner.element("p", null, [
            document.createTextNode("This is made by "),
            liner.element("strong", null, "DOMLiner")
        ]))
    content.appendChild(
        DOMLiner.element("p", null, [
            document.createTextNode("DOMLiner is available on "),
            liner.element("a", { href: "https://github.com/SaschaNaz/DOMLiner" }, "GitHub")
        ]))
});