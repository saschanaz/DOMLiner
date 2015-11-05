interface DOMDecorations {
    [key: string]: any;
}

class DOMLiner {
    constructor(public document: Document) {
    }

    element<T extends Element>(tagName: string, decorations?: DOMDecorations, children?: Node[]): T
    element<T extends Element>(tagName: string, decorations?: DOMDecorations, textContent?: string): T
    element<T extends Element>(tagName: string, decorations?: DOMDecorations, inner?: any) {
        let tag = this.document.createElement(tagName);
        if (decorations) {
            for (let attribute in decorations) {
                if ((<string>attribute).match(/^\./)) {
                    this._propertyAssign(tag, (<string>attribute).slice(1), decorations[attribute]);
                }
                else {
                    tag.setAttribute(attribute, decorations[attribute]);
                }
            }
        }
        if (inner) {
            if (Array.isArray(inner)) {
                inner.forEach((child: Node) => { tag.appendChild(child) });
            }
            else {
                tag.innerHTML = inner;
            }
        }
        return tag;
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

    static element<T extends Element>(tagName: string, decorations?: DOMDecorations, children?: Node[]): T
    static element<T extends Element>(tagName: string, decorations?: DOMDecorations, textContent?: string): T
    static element<T extends Element>(tagName: string, decorations?: DOMDecorations, inner?: any) {
        return this._globalLiner.element(tagName, decorations, inner);
    }

    static access<T extends Element>(element: T, fn: (element: T) => any) {
        fn(element);
        return element;
    }
}