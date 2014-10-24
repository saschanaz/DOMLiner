///<reference path="../domliner.ts" />
var liner = new DOMLiner(document);

document.addEventListener("DOMContentLoaded", function () {
    content.appendChild(liner.element("p", null, [
        document.createTextNode("This is made by "),
        liner.element("strong", null, "DOMLiner")
    ]));
    content.appendChild(DOMLiner.element("p", null, [
        document.createTextNode("DOMLiner is available on "),
        liner.element("a", { href: "https://github.com/SaschaNaz/DOMLiner" }, "GitHub")
    ]));
});
//# sourceMappingURL=app.js.map
