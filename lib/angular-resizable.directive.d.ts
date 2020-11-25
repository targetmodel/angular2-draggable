import { ElementRef, Renderer2, OnInit, EventEmitter, OnChanges, SimpleChanges, OnDestroy, AfterViewInit } from '@angular/core';
import { ResizeHandle } from './widgets/resize-handle';
import { ResizeHandleType } from './models/resize-handle-type';
import { IResizeEvent } from './models/resize-event';
import * as ɵngcc0 from '@angular/core';
export declare class AngularResizableDirective implements OnInit, OnChanges, OnDestroy, AfterViewInit {
    private el;
    private renderer;
    private _resizable;
    private _handles;
    private _handleType;
    private _handleResizing;
    private _direction;
    private _directionChanged;
    private _aspectRatio;
    private _containment;
    private _origMousePos;
    /** Original Size and Position */
    private _origSize;
    private _origPos;
    /** Current Size and Position */
    private _currSize;
    private _currPos;
    /** Initial Size and Position */
    private _initSize;
    private _initPos;
    /** Snap to gird */
    private _gridSize;
    private _bounding;
    /**
     * Bugfix: iFrames, and context unrelated elements block all events, and are unusable
     * https://github.com/xieziyu/angular2-draggable/issues/84
     */
    private _helperBlock;
    private draggingSub;
    private _adjusted;
    /** Disables the resizable if set to false. */
    ngResizable: any;
    /**
     * Which handles can be used for resizing.
     * @example
     * [rzHandles] = "'n,e,s,w,se,ne,sw,nw'"
     * equals to: [rzHandles] = "'all'"
     *
     * */
    rzHandles: ResizeHandleType;
    /**
     * Whether the element should be constrained to a specific aspect ratio.
     *  Multiple types supported:
     *  boolean: When set to true, the element will maintain its original aspect ratio.
     *  number: Force the element to maintain a specific aspect ratio during resizing.
     */
    rzAspectRatio: boolean | number;
    /**
     * Constrains resizing to within the bounds of the specified element or region.
     *  Multiple types supported:
     *  Selector: The resizable element will be contained to the bounding box of the first element found by the selector.
     *            If no element is found, no containment will be set.
     *  Element: The resizable element will be contained to the bounding box of this element.
     *  String: Possible values: "parent".
     */
    rzContainment: string | HTMLElement;
    /**
     * Snaps the resizing element to a grid, every x and y pixels.
     * A number for both width and height or an array values like [ x, y ]
     */
    rzGrid: number | number[];
    /** The minimum width the resizable should be allowed to resize to. */
    rzMinWidth: number;
    /** The minimum height the resizable should be allowed to resize to. */
    rzMinHeight: number;
    /** The maximum width the resizable should be allowed to resize to. */
    rzMaxWidth: number;
    /** The maximum height the resizable should be allowed to resize to. */
    rzMaxHeight: number;
    /** Whether to prevent default event */
    preventDefaultEvent: boolean;
    /** emitted when start resizing */
    rzStart: EventEmitter<IResizeEvent>;
    /** emitted when start resizing */
    rzResizing: EventEmitter<IResizeEvent>;
    /** emitted when stop resizing */
    rzStop: EventEmitter<IResizeEvent>;
    constructor(el: ElementRef<HTMLElement>, renderer: Renderer2);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    /** A method to reset size */
    resetSize(): void;
    /** A method to get current status */
    getStatus(): {
        size: {
            width: number;
            height: number;
        };
        position: {
            top: number;
            left: number;
        };
    };
    private updateResizable;
    /** Use it to update aspect */
    private updateAspectRatio;
    /** Use it to update containment */
    private updateContainment;
    /** Use it to create handle divs */
    private createHandles;
    /** Use it to create a handle */
    private createHandleByType;
    private removeHandles;
    onMouseDown(event: MouseEvent | TouchEvent, handle: ResizeHandle): void;
    private subscribeEvents;
    private unsubscribeEvents;
    onMouseLeave(): void;
    onMouseMove(event: MouseEvent | TouchEvent): void;
    private startResize;
    private stopResize;
    private onResizing;
    private getResizingEvent;
    private updateDirection;
    private resizeTo;
    private doResize;
    private adjustByRatio;
    private checkBounds;
    private checkSize;
    private getBounding;
    private resetBounding;
    private getGridSize;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AngularResizableDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<AngularResizableDirective, "[ngResizable]", ["ngResizable"], { "rzHandles": "rzHandles"; "rzAspectRatio": "rzAspectRatio"; "rzContainment": "rzContainment"; "rzGrid": "rzGrid"; "rzMinWidth": "rzMinWidth"; "rzMinHeight": "rzMinHeight"; "rzMaxWidth": "rzMaxWidth"; "rzMaxHeight": "rzMaxHeight"; "preventDefaultEvent": "preventDefaultEvent"; "ngResizable": "ngResizable"; }, { "rzStart": "rzStart"; "rzResizing": "rzResizing"; "rzStop": "rzStop"; }, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1yZXNpemFibGUuZGlyZWN0aXZlLmQudHMiLCJzb3VyY2VzIjpbImFuZ3VsYXItcmVzaXphYmxlLmRpcmVjdGl2ZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0SEEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzaXplSGFuZGxlIH0gZnJvbSAnLi93aWRnZXRzL3Jlc2l6ZS1oYW5kbGUnO1xuaW1wb3J0IHsgUmVzaXplSGFuZGxlVHlwZSB9IGZyb20gJy4vbW9kZWxzL3Jlc2l6ZS1oYW5kbGUtdHlwZSc7XG5pbXBvcnQgeyBJUmVzaXplRXZlbnQgfSBmcm9tICcuL21vZGVscy9yZXNpemUtZXZlbnQnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQW5ndWxhclJlc2l6YWJsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuICAgIHByaXZhdGUgZWw7XG4gICAgcHJpdmF0ZSByZW5kZXJlcjtcbiAgICBwcml2YXRlIF9yZXNpemFibGU7XG4gICAgcHJpdmF0ZSBfaGFuZGxlcztcbiAgICBwcml2YXRlIF9oYW5kbGVUeXBlO1xuICAgIHByaXZhdGUgX2hhbmRsZVJlc2l6aW5nO1xuICAgIHByaXZhdGUgX2RpcmVjdGlvbjtcbiAgICBwcml2YXRlIF9kaXJlY3Rpb25DaGFuZ2VkO1xuICAgIHByaXZhdGUgX2FzcGVjdFJhdGlvO1xuICAgIHByaXZhdGUgX2NvbnRhaW5tZW50O1xuICAgIHByaXZhdGUgX29yaWdNb3VzZVBvcztcbiAgICAvKiogT3JpZ2luYWwgU2l6ZSBhbmQgUG9zaXRpb24gKi9cbiAgICBwcml2YXRlIF9vcmlnU2l6ZTtcbiAgICBwcml2YXRlIF9vcmlnUG9zO1xuICAgIC8qKiBDdXJyZW50IFNpemUgYW5kIFBvc2l0aW9uICovXG4gICAgcHJpdmF0ZSBfY3VyclNpemU7XG4gICAgcHJpdmF0ZSBfY3VyclBvcztcbiAgICAvKiogSW5pdGlhbCBTaXplIGFuZCBQb3NpdGlvbiAqL1xuICAgIHByaXZhdGUgX2luaXRTaXplO1xuICAgIHByaXZhdGUgX2luaXRQb3M7XG4gICAgLyoqIFNuYXAgdG8gZ2lyZCAqL1xuICAgIHByaXZhdGUgX2dyaWRTaXplO1xuICAgIHByaXZhdGUgX2JvdW5kaW5nO1xuICAgIC8qKlxuICAgICAqIEJ1Z2ZpeDogaUZyYW1lcywgYW5kIGNvbnRleHQgdW5yZWxhdGVkIGVsZW1lbnRzIGJsb2NrIGFsbCBldmVudHMsIGFuZCBhcmUgdW51c2FibGVcbiAgICAgKiBodHRwczovL2dpdGh1Yi5jb20veGlleml5dS9hbmd1bGFyMi1kcmFnZ2FibGUvaXNzdWVzLzg0XG4gICAgICovXG4gICAgcHJpdmF0ZSBfaGVscGVyQmxvY2s7XG4gICAgcHJpdmF0ZSBkcmFnZ2luZ1N1YjtcbiAgICBwcml2YXRlIF9hZGp1c3RlZDtcbiAgICAvKiogRGlzYWJsZXMgdGhlIHJlc2l6YWJsZSBpZiBzZXQgdG8gZmFsc2UuICovXG4gICAgbmdSZXNpemFibGU6IGFueTtcbiAgICAvKipcbiAgICAgKiBXaGljaCBoYW5kbGVzIGNhbiBiZSB1c2VkIGZvciByZXNpemluZy5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIFtyekhhbmRsZXNdID0gXCInbixlLHMsdyxzZSxuZSxzdyxudydcIlxuICAgICAqIGVxdWFscyB0bzogW3J6SGFuZGxlc10gPSBcIidhbGwnXCJcbiAgICAgKlxuICAgICAqICovXG4gICAgcnpIYW5kbGVzOiBSZXNpemVIYW5kbGVUeXBlO1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIGVsZW1lbnQgc2hvdWxkIGJlIGNvbnN0cmFpbmVkIHRvIGEgc3BlY2lmaWMgYXNwZWN0IHJhdGlvLlxuICAgICAqICBNdWx0aXBsZSB0eXBlcyBzdXBwb3J0ZWQ6XG4gICAgICogIGJvb2xlYW46IFdoZW4gc2V0IHRvIHRydWUsIHRoZSBlbGVtZW50IHdpbGwgbWFpbnRhaW4gaXRzIG9yaWdpbmFsIGFzcGVjdCByYXRpby5cbiAgICAgKiAgbnVtYmVyOiBGb3JjZSB0aGUgZWxlbWVudCB0byBtYWludGFpbiBhIHNwZWNpZmljIGFzcGVjdCByYXRpbyBkdXJpbmcgcmVzaXppbmcuXG4gICAgICovXG4gICAgcnpBc3BlY3RSYXRpbzogYm9vbGVhbiB8IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBDb25zdHJhaW5zIHJlc2l6aW5nIHRvIHdpdGhpbiB0aGUgYm91bmRzIG9mIHRoZSBzcGVjaWZpZWQgZWxlbWVudCBvciByZWdpb24uXG4gICAgICogIE11bHRpcGxlIHR5cGVzIHN1cHBvcnRlZDpcbiAgICAgKiAgU2VsZWN0b3I6IFRoZSByZXNpemFibGUgZWxlbWVudCB3aWxsIGJlIGNvbnRhaW5lZCB0byB0aGUgYm91bmRpbmcgYm94IG9mIHRoZSBmaXJzdCBlbGVtZW50IGZvdW5kIGJ5IHRoZSBzZWxlY3Rvci5cbiAgICAgKiAgICAgICAgICAgIElmIG5vIGVsZW1lbnQgaXMgZm91bmQsIG5vIGNvbnRhaW5tZW50IHdpbGwgYmUgc2V0LlxuICAgICAqICBFbGVtZW50OiBUaGUgcmVzaXphYmxlIGVsZW1lbnQgd2lsbCBiZSBjb250YWluZWQgdG8gdGhlIGJvdW5kaW5nIGJveCBvZiB0aGlzIGVsZW1lbnQuXG4gICAgICogIFN0cmluZzogUG9zc2libGUgdmFsdWVzOiBcInBhcmVudFwiLlxuICAgICAqL1xuICAgIHJ6Q29udGFpbm1lbnQ6IHN0cmluZyB8IEhUTUxFbGVtZW50O1xuICAgIC8qKlxuICAgICAqIFNuYXBzIHRoZSByZXNpemluZyBlbGVtZW50IHRvIGEgZ3JpZCwgZXZlcnkgeCBhbmQgeSBwaXhlbHMuXG4gICAgICogQSBudW1iZXIgZm9yIGJvdGggd2lkdGggYW5kIGhlaWdodCBvciBhbiBhcnJheSB2YWx1ZXMgbGlrZSBbIHgsIHkgXVxuICAgICAqL1xuICAgIHJ6R3JpZDogbnVtYmVyIHwgbnVtYmVyW107XG4gICAgLyoqIFRoZSBtaW5pbXVtIHdpZHRoIHRoZSByZXNpemFibGUgc2hvdWxkIGJlIGFsbG93ZWQgdG8gcmVzaXplIHRvLiAqL1xuICAgIHJ6TWluV2lkdGg6IG51bWJlcjtcbiAgICAvKiogVGhlIG1pbmltdW0gaGVpZ2h0IHRoZSByZXNpemFibGUgc2hvdWxkIGJlIGFsbG93ZWQgdG8gcmVzaXplIHRvLiAqL1xuICAgIHJ6TWluSGVpZ2h0OiBudW1iZXI7XG4gICAgLyoqIFRoZSBtYXhpbXVtIHdpZHRoIHRoZSByZXNpemFibGUgc2hvdWxkIGJlIGFsbG93ZWQgdG8gcmVzaXplIHRvLiAqL1xuICAgIHJ6TWF4V2lkdGg6IG51bWJlcjtcbiAgICAvKiogVGhlIG1heGltdW0gaGVpZ2h0IHRoZSByZXNpemFibGUgc2hvdWxkIGJlIGFsbG93ZWQgdG8gcmVzaXplIHRvLiAqL1xuICAgIHJ6TWF4SGVpZ2h0OiBudW1iZXI7XG4gICAgLyoqIFdoZXRoZXIgdG8gcHJldmVudCBkZWZhdWx0IGV2ZW50ICovXG4gICAgcHJldmVudERlZmF1bHRFdmVudDogYm9vbGVhbjtcbiAgICAvKiogZW1pdHRlZCB3aGVuIHN0YXJ0IHJlc2l6aW5nICovXG4gICAgcnpTdGFydDogRXZlbnRFbWl0dGVyPElSZXNpemVFdmVudD47XG4gICAgLyoqIGVtaXR0ZWQgd2hlbiBzdGFydCByZXNpemluZyAqL1xuICAgIHJ6UmVzaXppbmc6IEV2ZW50RW1pdHRlcjxJUmVzaXplRXZlbnQ+O1xuICAgIC8qKiBlbWl0dGVkIHdoZW4gc3RvcCByZXNpemluZyAqL1xuICAgIHJ6U3RvcDogRXZlbnRFbWl0dGVyPElSZXNpemVFdmVudD47XG4gICAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LCByZW5kZXJlcjogUmVuZGVyZXIyKTtcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQ7XG4gICAgLyoqIEEgbWV0aG9kIHRvIHJlc2V0IHNpemUgKi9cbiAgICByZXNldFNpemUoKTogdm9pZDtcbiAgICAvKiogQSBtZXRob2QgdG8gZ2V0IGN1cnJlbnQgc3RhdHVzICovXG4gICAgZ2V0U3RhdHVzKCk6IHtcbiAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgd2lkdGg6IG51bWJlcjtcbiAgICAgICAgICAgIGhlaWdodDogbnVtYmVyO1xuICAgICAgICB9O1xuICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgdG9wOiBudW1iZXI7XG4gICAgICAgICAgICBsZWZ0OiBudW1iZXI7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBwcml2YXRlIHVwZGF0ZVJlc2l6YWJsZTtcbiAgICAvKiogVXNlIGl0IHRvIHVwZGF0ZSBhc3BlY3QgKi9cbiAgICBwcml2YXRlIHVwZGF0ZUFzcGVjdFJhdGlvO1xuICAgIC8qKiBVc2UgaXQgdG8gdXBkYXRlIGNvbnRhaW5tZW50ICovXG4gICAgcHJpdmF0ZSB1cGRhdGVDb250YWlubWVudDtcbiAgICAvKiogVXNlIGl0IHRvIGNyZWF0ZSBoYW5kbGUgZGl2cyAqL1xuICAgIHByaXZhdGUgY3JlYXRlSGFuZGxlcztcbiAgICAvKiogVXNlIGl0IHRvIGNyZWF0ZSBhIGhhbmRsZSAqL1xuICAgIHByaXZhdGUgY3JlYXRlSGFuZGxlQnlUeXBlO1xuICAgIHByaXZhdGUgcmVtb3ZlSGFuZGxlcztcbiAgICBvbk1vdXNlRG93bihldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQsIGhhbmRsZTogUmVzaXplSGFuZGxlKTogdm9pZDtcbiAgICBwcml2YXRlIHN1YnNjcmliZUV2ZW50cztcbiAgICBwcml2YXRlIHVuc3Vic2NyaWJlRXZlbnRzO1xuICAgIG9uTW91c2VMZWF2ZSgpOiB2b2lkO1xuICAgIG9uTW91c2VNb3ZlKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBzdGFydFJlc2l6ZTtcbiAgICBwcml2YXRlIHN0b3BSZXNpemU7XG4gICAgcHJpdmF0ZSBvblJlc2l6aW5nO1xuICAgIHByaXZhdGUgZ2V0UmVzaXppbmdFdmVudDtcbiAgICBwcml2YXRlIHVwZGF0ZURpcmVjdGlvbjtcbiAgICBwcml2YXRlIHJlc2l6ZVRvO1xuICAgIHByaXZhdGUgZG9SZXNpemU7XG4gICAgcHJpdmF0ZSBhZGp1c3RCeVJhdGlvO1xuICAgIHByaXZhdGUgY2hlY2tCb3VuZHM7XG4gICAgcHJpdmF0ZSBjaGVja1NpemU7XG4gICAgcHJpdmF0ZSBnZXRCb3VuZGluZztcbiAgICBwcml2YXRlIHJlc2V0Qm91bmRpbmc7XG4gICAgcHJpdmF0ZSBnZXRHcmlkU2l6ZTtcbn1cbiJdfQ==