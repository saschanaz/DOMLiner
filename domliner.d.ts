interface DOMDecorations {
    [key: string]: any;
}
declare class DOMLiner {
    document: Document;
    constructor(document: Document);
    element<T extends Element>(tagName: string, decorations?: DOMDecorations, children?: Node[]): T;
    element<T extends Element>(tagName: string, decorations?: DOMDecorations, textContent?: string): T;
    private _propertyAssign(element, propertyAnnotation, propertyValue);
    private static _globalLiner;
    static element<T extends Element>(tagName: string, decorations?: DOMDecorations, children?: Node[]): T;
    static element<T extends Element>(tagName: string, decorations?: DOMDecorations, textContent?: string): T;
    static access<T extends Element>(element: T, fn: (element: T) => any): T;
}
