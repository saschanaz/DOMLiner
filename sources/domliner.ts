interface DOMDecorations<T extends Element> {
    this: (element: T) => any;
    [key: string]: any;
}

class DOMLiner {
    constructor(public document: Document) {
    }

    element<T extends Element>(tagName: string, decorations?: DOMDecorations<T>, children?: (string | Node)[]): T
    element<T extends Element>(tagName: string, decorations?: DOMDecorations<T>, textContent?: string): T
    element<T extends Element>(tagName: string, decorations?: DOMDecorations<T>, inner?: any) {
        const el = this.document.createElement(tagName);
        if (decorations) {
            for (const attribute in decorations) {
                const item = decorations[attribute];
                if (attribute === "this") {
                    item(el);
                    continue;
                }

                if ((<string>attribute).match(/^\./)) {
                    this._propertyAssign(el, (<string>attribute).slice(1), item);
                }
                else {
                    el.setAttribute(attribute, item);
                }
            }
        }
        if (inner) {
            if (Array.isArray(inner)) {
                inner.forEach((child: string | Node) => {
                    if (typeof child === "string") {
                        el.appendChild(document.createTextNode(child));
                    }
                    else {
                        el.appendChild(child);
                    }
                });
            }
            else {
                el.innerHTML = inner;
            }
        }
        return el;
    }

    private _propertyAssign(element: any, propertyAnnotation: string, propertyValue: any) {
        // check there is another property assign marker
        // if then slice before marker and chain _propertyAssign
        // if not assign
        let marker = propertyAnnotation.search(/[^\\]\./); // escape .
        if (marker !== -1) {
            marker++; // previous index is of preceding character 
            let propertyName = propertyAnnotation.slice(0, marker).replace(/\\\./g, ".");
            let innerAnnotation = propertyAnnotation.slice(marker + 1);
            this._propertyAssign(element[propertyName], innerAnnotation, propertyValue);
        }
        else {
            element[propertyAnnotation.replace(/\\\./g, ".")] = propertyValue;
        }
    }

    private static _globalLiner = new DOMLiner(self.document);

    static element<T extends Element>(tagName: string, decorations?: DOMDecorations<T>, children?: (string | Node)[]): T;
    static element<T extends Element>(tagName: string, decorations?: DOMDecorations<T>, textContent?: string): T;
    static element<T extends Element>(tagName: string, decorations?: DOMDecorations<T>, inner?: any) {
        return this._globalLiner.element(tagName, decorations, inner);
    }

    static access<T extends Element>(element: T, fn: (element: T) => any) {
        fn(element);
        return element;
    }
}