import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
import {ProductsModule} from './products.module';

@NgModule({})
export class ProductCoreModule {
  constructor(@Optional() @SkipSelf() parent : ProductCoreModule) {
    if(parent) {
      throw new Error('Parent {CORE TODO MODULE } is loaded');
    }
  }

  static forRoot() : ModuleWithProviders<ProductsModule> {
    return {
      ngModule: ProductsModule
    };
  }
}
