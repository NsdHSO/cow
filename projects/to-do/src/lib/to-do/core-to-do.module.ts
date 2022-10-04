import {ModuleWithProviders, NgModule, Optional, SkipSelf} from "@angular/core";
import {ToDoModule} from "./to-do.module";

@NgModule({})
export class CoreToDogModule {
  static forRoot() : ModuleWithProviders<ToDoModule> {
    return {
      ngModule: ToDoModule,
    };
  }

  constructor(@Optional() @SkipSelf() parent : CoreToDogModule) {
    if(parent) {
      throw new Error("Parent {CORE TODO MODULE } is loaded");
    }
  }
}
