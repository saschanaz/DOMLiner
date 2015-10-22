interface DOMDecorations {
    [key: string]: any;
}
declare class DOMLiner {
    document: Document;
    constructor(document: Document);
    element(tagName: string, decorations?: DOMDecorations, children?: Node[]): Element;
    element(tagName: string, decorations?: DOMDecorations, textContent?: string): Element;
    private _propertyAssign(element, propertyAnnotation, propertyValue);
    private static _globalLiner;
    static element(tagName: string, decorations?: DOMDecorations, children?: Node[]): Element;
    static element(tagName: string, decorations?: DOMDecorations, textContent?: string): Element;
    static access(element: Element, fn: (element: Element) => any): Element;
}
