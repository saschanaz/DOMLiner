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
                inner.forEach(function (child) {
                    tag.appendChild(child);
                });
            else
                tag.innerHTML = inner;
        }
        return tag;
    };
    return DOMLiner;
})();
//# sourceMappingURL=domliner.js.map
