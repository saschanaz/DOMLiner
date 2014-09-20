interface DOMDecorations {
    [key: string]: any;
}

class DOMLiner {
    constructor(public document: Document) {
    }

    element(tagName: string, decorations?: DOMDecorations, children?: Node[]): Element
    element(tagName: string, decorations?: DOMDecorations, textContent?: string): Element
    element(tagName: string, decorations?: DOMDecorations, inner?: any) {
        var tag = this.document.createElement(tagName);
        if (decorations) {
            for (var attribute in decorations) {
                if ((<string>attribute).match(/^prop-/))
                    (<any>tag)[(<string>attribute).slice(5)] = decorations[attribute];
                else
                    tag.setAttribute(attribute, decorations[attribute]);
            }
        }
        if (inner) {
            if (Array.isArray(inner))
                inner.forEach((child: Node) => { tag.appendChild(child) });
            else
                tag.innerHTML = inner;
        }
        return tag;
    }
}