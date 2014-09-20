///<reference path="../domliner.ts" />
var liner = new DOMLiner(document);

document.addEventListener("DOMContentLoaded", function () {
    content.appendChild(liner.element("p", null, [
        document.createTextNode("This is made by "),
        liner.element("strong", null, "DOMLiner")
    ]));
});
//# sourceMappingURL=app.js.map
