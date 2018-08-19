(function (global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
    else {
        global.DOMLiner = global.DOMLiner || {};
        var exports = global.DOMLiner;
        factory(global.require, exports);
    }
})(this, function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class DOMLiner {
        constructor(document) {
            this.document = document;
        }
        element(tag, decorations, inner) {
            const el = typeof tag === "string" ? this.document.createElement(tag) : tag;
            if (decorations) {
                for (const attribute in decorations) {
                    const item = decorations[attribute];
                    if (attribute === "this") {
                        item(el);
                        continue;
                    }
                    if (attribute.match(/^\./)) {
                        this._propertyAssign(el, attribute.slice(1), item);
                    }
                    else {
                        el.setAttribute(attribute, item);
                    }
                }
            }
            if (inner) {
                if (Array.isArray(inner)) {
                    inner.forEach((child) => {
                        if (typeof child === "string") {
                            el.appendChild(document.createTextNode(child));
                        }
                        else {
                            el.appendChild(child);
                        }
                    });
                }
                else {
                    el.textContent = inner;
                }
            }
            return el;
        }
        _propertyAssign(element, propertyAnnotation, propertyValue) {
            // check there is another property assign marker
            // if then slice before marker and chain _propertyAssign
            // if not assign
            let marker = propertyAnnotation.search(/[^\\]\./); // escape .
            if (marker !== -1) {
                marker++; // previous index is of preceding character 
                let propertyName = propertyAnnotation.slice(0, marker).replace(/\\\./g, ".");
                let innerAnnotation = propertyAnnotation.slice(marker + 1);
                this._propertyAssign(element[propertyName], innerAnnotation, propertyValue);
            }
            else {
                element[propertyAnnotation.replace(/\\\./g, ".")] = propertyValue;
            }
        }
    }
    exports.DOMLiner = DOMLiner;
    const globalLiner = typeof document !== "undefined" ? new DOMLiner(self.document) : undefined;
    function element(tag, decorations, inner) {
        if (!globalLiner) {
            throw new Error("You cannot use DOMLiner.element as there is no global `document` variable in this platform. Please construct a new DOMLiner instance: `new DOMLiner(doc)`");
        }
        return globalLiner.element(tag, decorations, inner);
    }
    exports.element = element;
    function access(element, fn) {
        fn(element);
        return element;
    }
    exports.access = access;
});
//# sourceMappingURL=domliner.js.map