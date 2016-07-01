///<reference path="../lib/domliner.d.ts" />
document.addEventListener("DOMContentLoaded", function () {
    content.appendChild(DOMLiner.element("p", null, [
        "This is made by ",
        DOMLiner.element("strong", null, "DOMLiner")
    ]));
    content.appendChild(DOMLiner.element("p", null, [
        "DOMLiner is available on ",
        DOMLiner.element("a", { href: "https://github.com/SaschaNaz/DOMLiner" }, "GitHub")
    ]));
});
//# sourceMappingURL=app.js.map