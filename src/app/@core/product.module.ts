import {NgModule} from '@angular/core';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialogRef
} from '@angular/material/dialog';
import {ProductCoreModule} from '../../../projects/products/src/lib/product-core.module';

@NgModule({
  declarations: [],
  imports: [
    ProductCoreModule.forRoot(),
  ],
  providers:[

    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: {hasBackdrop: true}
    },
  ]
})
export class NgxProductModule {}
