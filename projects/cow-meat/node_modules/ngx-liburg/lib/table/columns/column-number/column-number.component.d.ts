import { BaseColumn } from '../../base-column';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class ColumnNumberComponent<T> extends BaseColumn {
    editRow: boolean;
    textValidator: FormControl;
    nonNumber: boolean;
    changeEntity(element: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ColumnNumberComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ColumnNumberComponent<any>, "elix-column-number", never, { "editRow": "editRow"; }, {}, never, never, false>;
}
