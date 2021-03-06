import { Renderer2 } from '@angular/core';
export declare class HelperBlock {
    protected parent: Element;
    protected renderer: Renderer2;
    protected _helper: Element;
    private _added;
    constructor(parent: Element, renderer: Renderer2);
    add(): void;
    remove(): void;
    dispose(): void;
    readonly el: Element;
}
