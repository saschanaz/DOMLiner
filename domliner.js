var DOMLiner = (function () {
    function DOMLiner(document) {
        this.document = document;
    }
    DOMLiner.prototype.element = function (tagName, decorations, inner) {
        var tag = this.document.createElement(tagName);
        if (decorations) {
            for (var attribute in decorations) {
                if (attribute.match(/^\./)) {
                    this._propertyAssign(tag, attribute.slice(1), decorations[attribute]);
                }
                else {
                    tag.setAttribute(attribute, decorations[attribute]);
                }
            }
        }
        if (inner) {
            if (Array.isArray(inner)) {
                inner.forEach(function (child) { tag.appendChild(child); });
            }
            else {
                tag.innerHTML = inner;
            }
        }
        return tag;
    };
    DOMLiner.prototype._propertyAssign = function (element, propertyAnnotation, propertyValue) {
        // check there is another property assign marker
        // if then slice before marker and chain _propertyAssign
        // if not assign
        var marker = propertyAnnotation.search(/[^\\]\./); // escape .
        if (marker !== -1) {
            marker++; // previous index is of preceding character 
            var propertyName = propertyAnnotation.slice(0, marker).replace(/\\\./g, ".");
            var innerAnnotation = propertyAnnotation.slice(marker + 1);
            this._propertyAssign(element[propertyName], innerAnnotation, propertyValue);
        }
        else {
            element[propertyAnnotation.replace(/\\\./g, ".")] = propertyValue;
        }
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