import { TemplateRef, ViewContainerRef } from '@angular/core';
import { BaseColumn } from '../../base-column';
import { OverlayRef } from '@angular/cdk/overlay';
import { ElixTooltipService } from "./elix-tooltip.service";
import { DataSourceMaterialTable } from "../../table/table.component";
import * as i0 from "@angular/core";
export declare class ColumnAreaTextComponent extends BaseColumn {
    private _elixTooltip;
    private _viewContainer;
    value: boolean;
    vars: any;
    tooltipRef: TemplateRef<any>;
    tooltipOverlay: OverlayRef;
    width: number;
    constructor(_elixTooltip: ElixTooltipService, _viewContainer: ViewContainerRef);
    openTooltip(element: HTMLElement, model: DataSourceMaterialTable<any>): void;
    closeTooltip(): void;
    doubleClick(element: DataSourceMaterialTable<any>, value: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ColumnAreaTextComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ColumnAreaTextComponent, "elix-column-area-text", never, {}, {}, never, never, false>;
}
