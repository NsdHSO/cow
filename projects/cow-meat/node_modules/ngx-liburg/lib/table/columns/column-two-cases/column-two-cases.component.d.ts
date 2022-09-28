import { EventEmitter, OnInit } from '@angular/core';
import { BaseColumn } from "../../base-column";
import { DataSourceMaterialTable } from "../../table/table.component";
import * as i0 from "@angular/core";
declare enum SelectEnum {
    TRUE = "true",
    FALSE = "false"
}
export declare class ColumnTwoCasesComponent<T> extends BaseColumn implements OnInit {
    onValueChanges: EventEmitter<DataSourceMaterialTable<T>>;
    chosenList: Array<{
        value: SelectEnum;
        view: string;
    }>;
    ngOnInit(): void;
    changeValue(): void;
    changeEntity(param: {
        change: {
            data: string;
            dataChanged: any;
        };
    }): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ColumnTwoCasesComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ColumnTwoCasesComponent<any>, "elix-column-two-cases", never, {}, { "onValueChanges": "onValueChanges"; }, never, never, false>;
}
export {};
