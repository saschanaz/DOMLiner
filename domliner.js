var DOMLiner = (function () {
    function DOMLiner(document) {
        this.document = document;
    }
    DOMLiner.prototype.element = function (tagName, decorations, inner) {
        var tag = this.document.createElement(tagName);
        if (decorations) {
            for (var attribute in decorations) {
                if (attribute.match(/^prop-/))
                    tag[attribute.slice(5)] = decorations[attribute];
                else
                    tag.setAttribute(attribute, decorations[attribute]);
            }
        }
        if (inner) {
            if (Array.isArray(inner))
                inner.forEach(function (child) { tag.appendChild(child); });
            else
                tag.innerHTML = inner;
        }
        return tag;
    };
    DOMLiner.element = function (tagName, decorations, inner) {
        return this._globalLiner.element(tagName, decorations, inner);
    };
    DOMLiner.access = function (element, fn) {
        fn(element);
        return element;
    };
    DOMLiner._globalLiner = new DOMLiner(self.document);
    return DOMLiner;
})();
//# sourceMappingURL=domliner.js.map