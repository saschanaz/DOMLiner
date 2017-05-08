interface DOMDecorations<T extends Element> {
    this?: (element: T) => any;
    [key: string]: any;
}
declare class DOMLiner {
    document: Document;
    constructor(document: Document);
    element<T extends keyof ElementTagNameMap>(tag: T | ElementTagNameMap[T], decorations?: DOMDecorations<ElementTagNameMap[T]>, children?: (string | Node)[]): ElementTagNameMap[T];
    element<T extends keyof ElementTagNameMap>(tag: T | ElementTagNameMap[T], decorations?: DOMDecorations<ElementTagNameMap[T]>, textContent?: string): ElementTagNameMap[T];
    private _propertyAssign(element, propertyAnnotation, propertyValue);
    private static _globalLiner;
    static element<T extends keyof ElementTagNameMap>(tagName: T | ElementTagNameMap[T], decorations?: DOMDecorations<ElementTagNameMap[T]>, children?: (string | Node)[]): ElementTagNameMap[T];
    static element<T extends keyof ElementTagNameMap>(tagName: T | ElementTagNameMap[T], decorations?: DOMDecorations<ElementTagNameMap[T]>, textContent?: string): ElementTagNameMap[T];
    static access<T extends Element>(element: T, fn: (element: T) => any): T;
}
