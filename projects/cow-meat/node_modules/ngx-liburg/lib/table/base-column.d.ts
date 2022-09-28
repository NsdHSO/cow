import { MatColumnDef } from '@angular/material/table';
import * as i0 from "@angular/core";
export declare abstract class BaseColumn {
    columnDef: MatColumnDef;
    name: string;
    field: string;
    className: string;
    iconClass: string;
    editRow: boolean;
    footerMessage: string | number | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseColumn, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseColumn, "app-base", never, { "name": "name"; "field": "field"; "className": "className"; "iconClass": "iconClass"; "editRow": "editRow"; "footerMessage": "footerMessage"; }, {}, never, never, false>;
}
