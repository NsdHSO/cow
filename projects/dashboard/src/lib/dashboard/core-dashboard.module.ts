import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from "@angular/core";
import {DashboardModule} from "./dashboard.module";

@NgModule({})
export class CoreDashboardModule {
  constructor(@Optional() @SkipSelf() parent : CoreDashboardModule) {
    if(parent) {
      throw new Error("Parent {CORE DRIVER MODULE } is loaded");
    }
  }

  static forRoot() : ModuleWithProviders<DashboardModule> {
    return {
      ngModule: DashboardModule,
    };
  }
}
