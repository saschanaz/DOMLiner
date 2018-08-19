export interface DOMDecorations<T extends Element> {
    this?: (element: T) => any;
    [key: string]: any;
}
export declare class DOMLiner {
    document: Document;
    constructor(document: Document);
    element<T extends keyof ElementTagNameMap>(tag: T, decorations?: DOMDecorations<ElementTagNameMap[T]>, children?: (string | Node)[]): ElementTagNameMap[T];
    element<T extends keyof ElementTagNameMap>(tag: T, decorations?: DOMDecorations<ElementTagNameMap[T]>, textContent?: string): ElementTagNameMap[T];
    element<T extends Element>(tag: T, decorations?: DOMDecorations<T>, children?: (string | Node)[]): T;
    element<T extends Element>(tag: T, decorations?: DOMDecorations<T>, textContent?: string): T;
    private _propertyAssign;
}
export declare function element<T extends keyof ElementTagNameMap>(tagName: T, decorations?: DOMDecorations<ElementTagNameMap[T]>, children?: (string | Node)[]): ElementTagNameMap[T];
export declare function element<T extends keyof ElementTagNameMap>(tagName: T, decorations?: DOMDecorations<ElementTagNameMap[T]>, textContent?: string): ElementTagNameMap[T];
export declare function element<T extends Element>(tag: T, decorations?: DOMDecorations<T>, children?: (string | Node)[]): T;
export declare function element<T extends Element>(tag: T, decorations?: DOMDecorations<T>, textContent?: string): T;
export declare function access<T extends Element>(element: T, fn: (element: T) => any): T;
export as namespace DOMLiner;
