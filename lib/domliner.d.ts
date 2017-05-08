interface DOMDecorations<T extends Element> {
    this?: (element: T) => any;
    [key: string]: any;
}
declare class DOMLiner {
    document: Document;
    constructor(document: Document);
    element<T extends keyof ElementTagNameMap>(tag: T, decorations?: DOMDecorations<ElementTagNameMap[T]>, children?: (string | Node)[]): ElementTagNameMap[T];
    element<T extends keyof ElementTagNameMap>(tag: T, decorations?: DOMDecorations<ElementTagNameMap[T]>, textContent?: string): ElementTagNameMap[T];
    element<T extends Element>(tag: T, decorations?: DOMDecorations<T>, children?: (string | Node)[]): T;
    element<T extends Element>(tag: T, decorations?: DOMDecorations<T>, textContent?: string): T;
    private _propertyAssign(element, propertyAnnotation, propertyValue);
    private static _globalLiner;
    static element<T extends keyof ElementTagNameMap>(tagName: T, decorations?: DOMDecorations<ElementTagNameMap[T]>, children?: (string | Node)[]): ElementTagNameMap[T];
    static element<T extends keyof ElementTagNameMap>(tagName: T, decorations?: DOMDecorations<ElementTagNameMap[T]>, textContent?: string): ElementTagNameMap[T];
    static element<T extends Element>(tag: T, decorations?: DOMDecorations<T>, children?: (string | Node)[]): T;
    static element<T extends Element>(tag: T, decorations?: DOMDecorations<T>, textContent?: string): T;
    static access<T extends Element>(element: T, fn: (element: T) => any): T;
}
