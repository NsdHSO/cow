import { RendererFactory2, TemplateRef, ViewContainerRef } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ConnectedPosition } from '@angular/cdk/overlay';
import * as i0 from "@angular/core";
export declare const configOverlay: {
    LEFT: ConnectedPosition;
    RIGHT: ConnectedPosition;
    TOP: ConnectedPosition;
    BOTTOM: ConnectedPosition;
};
export declare class ElixTooltipService {
    private _overlay;
    private _rendererFactory;
    private _rendered2;
    constructor(_overlay: Overlay, _rendererFactory: RendererFactory2);
    initTooltip(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef, origin?: HTMLElement | any, width?: number): import("@angular/cdk/overlay").OverlayRef;
    close(overlayRef?: any): void;
    private _getConfigAtArrow;
    static ɵfac: i0.ɵɵFactoryDeclaration<ElixTooltipService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ElixTooltipService>;
}
