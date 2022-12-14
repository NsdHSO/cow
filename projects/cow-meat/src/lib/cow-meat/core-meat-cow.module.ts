import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
import {CowMeatModule} from './cow-meat.module';

@NgModule({})
export class CoreMeatCowModule {
  constructor(@Optional() @SkipSelf() parent : CoreMeatCowModule) {
    if(parent) {
      throw new Error('Parent {CORE' +
        ' Cow MODULE } is loaded');
    }
  }

  static forRoot() : ModuleWithProviders<CowMeatModule> {
    return {
      ngModule: CowMeatModule
    };
  }
}
