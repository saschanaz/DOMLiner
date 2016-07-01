DOMLiner
========

A helper to construct DOM in fewer script lines.

A sample is available [here](//saschanaz.github.io/DOMLiner/sample).

Installable via `bower install domliner`.

# API

```typescript
interface DOMDecorations {
    [key: string]: any;
}
declare class DOMLiner {
    document: Document;
    constructor(document: Document);
    element(tagName: string, decorations?: DOMDecorations, children?: (string | Node)[]): Element;
    element(tagName: string, decorations?: DOMDecorations, textContent?: string): Element;
    static element(tagName: string, decorations?: DOMDecorations, children?: (string | Node)[]): Element;
    static element(tagName: string, decorations?: DOMDecorations, textContent?: string): Element;
}
```
