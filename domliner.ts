class DOMLiner {
    constructor(public document: Document) {
    }

    element(tagName: string, properties?: { [key: string]: any }, children?: Node[]): Element
    element(tagName: string, properties?: { [key: string]: any }, children?: string): Element
    element(tagName: string, properties?: { [key: string]: any }, children?: any) {
        var tag = this.document.createElement(tagName);
        if (properties)
            for (var property in properties)
                (<any>tag)[property] = properties[property];
        if (children) {
            if (Array.isArray(children))
                children.forEach((child: Node) => { tag.appendChild(child) });
            else
                tag.innerHTML = children;
        }
        return tag;
    }
}