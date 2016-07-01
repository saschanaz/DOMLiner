///<reference path="../lib/domliner.d.ts" />
declare var content: HTMLDivElement;

document.addEventListener("DOMContentLoaded", () => {
    content.appendChild(
        DOMLiner.element("p", null, [
            "This is made by ",
            DOMLiner.element("strong", null, "DOMLiner")
        ]))
    content.appendChild(
        DOMLiner.element("p", null, [
            "DOMLiner is available on ",
            DOMLiner.element("a", { href: "https://github.com/SaschaNaz/DOMLiner" }, "GitHub")
        ]))
});