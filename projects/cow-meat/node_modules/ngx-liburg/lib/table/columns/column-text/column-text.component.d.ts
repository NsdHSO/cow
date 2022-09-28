import { EventEmitter } from '@angular/core';
import { BaseColumn } from '../../base-column';
import * as i0 from "@angular/core";
export declare class ColumnTextComponent<T> extends BaseColumn {
    onValueChanges: EventEmitter<{
        change: unknown;
    }>;
    changeEntity(rowElement: {
        change: unknown;
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ColumnTextComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ColumnTextComponent<any>, "elix-column-text", never, {}, { "onValueChanges": "onValueChanges"; }, never, never, false>;
}
