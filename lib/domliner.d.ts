interface DOMDecorations<T extends Element> {
    this?: (element: T) => any;
    [key: string]: any;
}
declare var DOMLiner: {
    new (document: Document): {
        document: Document;
        element<T extends keyof ElementTagNameMap>(tag: T, decorations?: DOMDecorations<ElementTagNameMap[T]>, children?: (string | Node)[]): ElementTagNameMap[T];
        element<T extends keyof ElementTagNameMap>(tag: T, decorations?: DOMDecorations<ElementTagNameMap[T]>, textContent?: string): ElementTagNameMap[T];
        element<T extends Element>(tag: T, decorations?: DOMDecorations<T>, children?: (string | Node)[]): T;
        element<T extends Element>(tag: T, decorations?: DOMDecorations<T>, textContent?: string): T;
    };
    element<T extends keyof ElementTagNameMap>(tagName: T, decorations?: DOMDecorations<ElementTagNameMap[T]>, children?: (string | Node)[]): ElementTagNameMap[T];
    element<T extends keyof ElementTagNameMap>(tagName: T, decorations?: DOMDecorations<ElementTagNameMap[T]>, textContent?: string): ElementTagNameMap[T];
    element<T extends Element>(tag: T, decorations?: DOMDecorations<T>, children?: (string | Node)[]): T;
    element<T extends Element>(tag: T, decorations?: DOMDecorations<T>, textContent?: string): T;
    access<T extends Element>(element: T, fn: (element: T) => any): T;
};
