var DOMLiner = (function () {
    function DOMLiner(document) {
        this.document = document;
    }
    DOMLiner.prototype.element = function (tagName, properties, children) {
        var tag = this.document.createElement(tagName);
        if (properties)
            for (var property in properties)
                tag[property] = properties[property];
        if (children) {
            if (Array.isArray(children))
                children.forEach(function (child) {
                    tag.appendChild(child);
                });
            else
                tag.innerHTML = children;
        }
        return tag;
    };
    return DOMLiner;
})();
//# sourceMappingURL=domliner.js.map
