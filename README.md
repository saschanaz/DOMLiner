DOMLiner
========

A helper to construct DOM in fewer script lines.

A sample is available [here](//saschanaz.github.io/DOMLiner/sample).

Installable via `npm install domliner`.

### Use

```js
document.body.appendChild(DOMLiner.element("div", { class: "foo" }, [
    // "this" has a special meaning, it receives a callback where the argument is the element object being created
    DOMLiner.element("div", { this: l => l.addEventListener("click", ev => alert("clicked")) }, [
        DOMLiner.element("img", { src: "image.png" }),
        DOMLiner.element("span", null, "a text")
    ]
]));

let existingElement = document.createElement("div");
DOMLiner.element(existingElement, { class: "bar" }, [
    DOMLiner.element("i", null, "you can also manipulate existing element")
]);
```

### API

```typescript
interface DOMDecorations {
    [key: string]: any;
}
declare class DOMLiner {
    document: Document;
    constructor(document: Document);
    element(tag: string | Element, decorations?: DOMDecorations, children?: (string | Node)[]): Element;
    element(tag: string | Element, decorations?: DOMDecorations, textContent?: string): Element;
    static element(tag: string | Element, decorations?: DOMDecorations, children?: (string | Node)[]): Element;
    static element(tag: string | Element, decorations?: DOMDecorations, textContent?: string): Element;
}
```
