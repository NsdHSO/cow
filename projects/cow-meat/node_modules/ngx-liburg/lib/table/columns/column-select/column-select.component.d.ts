import { EventEmitter, OnInit } from '@angular/core';
import { BaseColumn } from "../../base-column";
import { DataSourceMaterialTable } from "../../table/table.component";
import * as i0 from "@angular/core";
export interface ColumnSelect<T> {
    index: number;
    value: T;
    name: string;
}
export declare class ColumnSelectComponent<T> extends BaseColumn implements OnInit {
    options?: ColumnSelect<boolean>[];
    truthy: boolean;
    onValueChanges: EventEmitter<DataSourceMaterialTable<T>>;
    ngOnInit(): void;
    changeEntity(rowElement: DataSourceMaterialTable<T>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ColumnSelectComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ColumnSelectComponent<any>, "elix-column-select", never, { "options": "options"; "truthy": "truthy"; }, { "onValueChanges": "onValueChanges"; }, never, never, false>;
}
