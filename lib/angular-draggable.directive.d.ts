import { ElementRef, Renderer2, OnInit, EventEmitter, OnChanges, SimpleChanges, OnDestroy, AfterViewInit } from '@angular/core';
import { IPosition } from './models/position';
import * as ɵngcc0 from '@angular/core';
export declare class AngularDraggableDirective implements OnInit, OnDestroy, OnChanges, AfterViewInit {
    private el;
    private renderer;
    private allowDrag;
    private moving;
    private orignal;
    private oldTrans;
    private tempTrans;
    private currTrans;
    private oldZIndex;
    private _zIndex;
    private needTransform;
    private draggingSub;
    /**
     * Bugfix: iFrames, and context unrelated elements block all events, and are unusable
     * https://github.com/xieziyu/angular2-draggable/issues/84
     */
    private _helperBlock;
    started: EventEmitter<any>;
    stopped: EventEmitter<any>;
    edge: EventEmitter<any>;
    /** Make the handle HTMLElement draggable */
    handle: HTMLElement;
    /** Set the bounds HTMLElement */
    bounds: HTMLElement;
    /** List of allowed out of bounds edges **/
    outOfBounds: {
        top: boolean;
        right: boolean;
        bottom: boolean;
        left: boolean;
    };
    /** Round the position to nearest grid */
    gridSize: number;
    /** Set z-index when dragging */
    zIndexMoving: string;
    /** Set z-index when not dragging */
    zIndex: string;
    /** Whether to limit the element stay in the bounds */
    inBounds: boolean;
    /** Whether the element should use it's previous drag position on a new drag event. */
    trackPosition: boolean;
    /** Input css scale transform of element so translations are correct */
    scale: number;
    /** Whether to prevent default event */
    preventDefaultEvent: boolean;
    /** Set initial position by offsets */
    position: IPosition;
    /** Lock axis: 'x' or 'y' */
    lockAxis: string;
    /** Emit position offsets when moving */
    movingOffset: EventEmitter<IPosition>;
    /** Emit position offsets when put back */
    endOffset: EventEmitter<IPosition>;
    ngDraggable: any;
    constructor(el: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    private getDragEl;
    resetPosition(): void;
    private moveTo;
    private transform;
    private pickUp;
    private subscribeEvents;
    private unsubscribeEvents;
    boundsCheck(): {
        'top': boolean;
        'right': boolean;
        'bottom': boolean;
        'left': boolean;
    };
    /** Get current offset */
    getCurrentOffset(): IPosition;
    private putBack;
    checkHandleTarget(target: EventTarget, element: Element): boolean;
    onMouseDown(event: MouseEvent | TouchEvent): void;
    onMouseMove(event: MouseEvent | TouchEvent): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AngularDraggableDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<AngularDraggableDirective, "[ngDraggable]", ["ngDraggable"], { "outOfBounds": "outOfBounds"; "gridSize": "gridSize"; "inBounds": "inBounds"; "trackPosition": "trackPosition"; "scale": "scale"; "preventDefaultEvent": "preventDefaultEvent"; "position": "position"; "lockAxis": "lockAxis"; "zIndex": "zIndex"; "ngDraggable": "ngDraggable"; "bounds": "bounds"; "handle": "handle"; "zIndexMoving": "zIndexMoving"; }, { "started": "started"; "stopped": "stopped"; "edge": "edge"; "movingOffset": "movingOffset"; "endOffset": "endOffset"; }, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1kcmFnZ2FibGUuZGlyZWN0aXZlLmQudHMiLCJzb3VyY2VzIjpbImFuZ3VsYXItZHJhZ2dhYmxlLmRpcmVjdGl2ZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0VBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBPbkluaXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElQb3NpdGlvbiB9IGZyb20gJy4vbW9kZWxzL3Bvc2l0aW9uJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEFuZ3VsYXJEcmFnZ2FibGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0IHtcbiAgICBwcml2YXRlIGVsO1xuICAgIHByaXZhdGUgcmVuZGVyZXI7XG4gICAgcHJpdmF0ZSBhbGxvd0RyYWc7XG4gICAgcHJpdmF0ZSBtb3Zpbmc7XG4gICAgcHJpdmF0ZSBvcmlnbmFsO1xuICAgIHByaXZhdGUgb2xkVHJhbnM7XG4gICAgcHJpdmF0ZSB0ZW1wVHJhbnM7XG4gICAgcHJpdmF0ZSBjdXJyVHJhbnM7XG4gICAgcHJpdmF0ZSBvbGRaSW5kZXg7XG4gICAgcHJpdmF0ZSBfekluZGV4O1xuICAgIHByaXZhdGUgbmVlZFRyYW5zZm9ybTtcbiAgICBwcml2YXRlIGRyYWdnaW5nU3ViO1xuICAgIC8qKlxuICAgICAqIEJ1Z2ZpeDogaUZyYW1lcywgYW5kIGNvbnRleHQgdW5yZWxhdGVkIGVsZW1lbnRzIGJsb2NrIGFsbCBldmVudHMsIGFuZCBhcmUgdW51c2FibGVcbiAgICAgKiBodHRwczovL2dpdGh1Yi5jb20veGlleml5dS9hbmd1bGFyMi1kcmFnZ2FibGUvaXNzdWVzLzg0XG4gICAgICovXG4gICAgcHJpdmF0ZSBfaGVscGVyQmxvY2s7XG4gICAgc3RhcnRlZDogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgc3RvcHBlZDogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgZWRnZTogRXZlbnRFbWl0dGVyPGFueT47XG4gICAgLyoqIE1ha2UgdGhlIGhhbmRsZSBIVE1MRWxlbWVudCBkcmFnZ2FibGUgKi9cbiAgICBoYW5kbGU6IEhUTUxFbGVtZW50O1xuICAgIC8qKiBTZXQgdGhlIGJvdW5kcyBIVE1MRWxlbWVudCAqL1xuICAgIGJvdW5kczogSFRNTEVsZW1lbnQ7XG4gICAgLyoqIExpc3Qgb2YgYWxsb3dlZCBvdXQgb2YgYm91bmRzIGVkZ2VzICoqL1xuICAgIG91dE9mQm91bmRzOiB7XG4gICAgICAgIHRvcDogYm9vbGVhbjtcbiAgICAgICAgcmlnaHQ6IGJvb2xlYW47XG4gICAgICAgIGJvdHRvbTogYm9vbGVhbjtcbiAgICAgICAgbGVmdDogYm9vbGVhbjtcbiAgICB9O1xuICAgIC8qKiBSb3VuZCB0aGUgcG9zaXRpb24gdG8gbmVhcmVzdCBncmlkICovXG4gICAgZ3JpZFNpemU6IG51bWJlcjtcbiAgICAvKiogU2V0IHotaW5kZXggd2hlbiBkcmFnZ2luZyAqL1xuICAgIHpJbmRleE1vdmluZzogc3RyaW5nO1xuICAgIC8qKiBTZXQgei1pbmRleCB3aGVuIG5vdCBkcmFnZ2luZyAqL1xuICAgIHpJbmRleDogc3RyaW5nO1xuICAgIC8qKiBXaGV0aGVyIHRvIGxpbWl0IHRoZSBlbGVtZW50IHN0YXkgaW4gdGhlIGJvdW5kcyAqL1xuICAgIGluQm91bmRzOiBib29sZWFuO1xuICAgIC8qKiBXaGV0aGVyIHRoZSBlbGVtZW50IHNob3VsZCB1c2UgaXQncyBwcmV2aW91cyBkcmFnIHBvc2l0aW9uIG9uIGEgbmV3IGRyYWcgZXZlbnQuICovXG4gICAgdHJhY2tQb3NpdGlvbjogYm9vbGVhbjtcbiAgICAvKiogSW5wdXQgY3NzIHNjYWxlIHRyYW5zZm9ybSBvZiBlbGVtZW50IHNvIHRyYW5zbGF0aW9ucyBhcmUgY29ycmVjdCAqL1xuICAgIHNjYWxlOiBudW1iZXI7XG4gICAgLyoqIFdoZXRoZXIgdG8gcHJldmVudCBkZWZhdWx0IGV2ZW50ICovXG4gICAgcHJldmVudERlZmF1bHRFdmVudDogYm9vbGVhbjtcbiAgICAvKiogU2V0IGluaXRpYWwgcG9zaXRpb24gYnkgb2Zmc2V0cyAqL1xuICAgIHBvc2l0aW9uOiBJUG9zaXRpb247XG4gICAgLyoqIExvY2sgYXhpczogJ3gnIG9yICd5JyAqL1xuICAgIGxvY2tBeGlzOiBzdHJpbmc7XG4gICAgLyoqIEVtaXQgcG9zaXRpb24gb2Zmc2V0cyB3aGVuIG1vdmluZyAqL1xuICAgIG1vdmluZ09mZnNldDogRXZlbnRFbWl0dGVyPElQb3NpdGlvbj47XG4gICAgLyoqIEVtaXQgcG9zaXRpb24gb2Zmc2V0cyB3aGVuIHB1dCBiYWNrICovXG4gICAgZW5kT2Zmc2V0OiBFdmVudEVtaXR0ZXI8SVBvc2l0aW9uPjtcbiAgICBuZ0RyYWdnYWJsZTogYW55O1xuICAgIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIyKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBnZXREcmFnRWw7XG4gICAgcmVzZXRQb3NpdGlvbigpOiB2b2lkO1xuICAgIHByaXZhdGUgbW92ZVRvO1xuICAgIHByaXZhdGUgdHJhbnNmb3JtO1xuICAgIHByaXZhdGUgcGlja1VwO1xuICAgIHByaXZhdGUgc3Vic2NyaWJlRXZlbnRzO1xuICAgIHByaXZhdGUgdW5zdWJzY3JpYmVFdmVudHM7XG4gICAgYm91bmRzQ2hlY2soKToge1xuICAgICAgICAndG9wJzogYm9vbGVhbjtcbiAgICAgICAgJ3JpZ2h0JzogYm9vbGVhbjtcbiAgICAgICAgJ2JvdHRvbSc6IGJvb2xlYW47XG4gICAgICAgICdsZWZ0JzogYm9vbGVhbjtcbiAgICB9O1xuICAgIC8qKiBHZXQgY3VycmVudCBvZmZzZXQgKi9cbiAgICBnZXRDdXJyZW50T2Zmc2V0KCk6IElQb3NpdGlvbjtcbiAgICBwcml2YXRlIHB1dEJhY2s7XG4gICAgY2hlY2tIYW5kbGVUYXJnZXQodGFyZ2V0OiBFdmVudFRhcmdldCwgZWxlbWVudDogRWxlbWVudCk6IGJvb2xlYW47XG4gICAgb25Nb3VzZURvd24oZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KTogdm9pZDtcbiAgICBvbk1vdXNlTW92ZShldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpOiB2b2lkO1xufVxuIl19