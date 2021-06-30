# DOMLiner

A helper to construct DOM in fewer script lines.

A sample is available [here](sample/).

Installable via [`npm install domliner`](https://www.npmjs.com/package/domliner).

### Use

```js
import { element } from "../lib/domliner.js";

document.body.appendChild(
  element("div", { class: "foo" }, [
    // "this" has a special meaning, it receives a callback where the argument is the element object being created
    element(
      "div",
      { this: (l) => l.addEventListener("click", (ev) => alert("clicked")) },
      [element("img", { src: "image.png" }), element("span", null, "a text")]
    ),
  ])
);

const existingElement = document.createElement("div");
element(existingElement, { class: "bar" }, [
  element("i", null, "you can also manipulate existing element"),
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
  element(
    tag: string | Element,
    decorations?: DOMDecorations,
    children?: (string | Node)[]
  ): Element;
  element(
    tag: string | Element,
    decorations?: DOMDecorations,
    textContent?: string
  ): Element;
  static element(
    tag: string | Element,
    decorations?: DOMDecorations,
    children?: (string | Node)[]
  ): Element;
  static element(
    tag: string | Element,
    decorations?: DOMDecorations,
    textContent?: string
  ): Element;
}
```
