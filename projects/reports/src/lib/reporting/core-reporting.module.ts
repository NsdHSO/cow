import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from "@angular/core";
import {ReportingModule} from "./reporting.module";

@NgModule({})
export class CoreReportingModule {
  constructor(@Optional() @SkipSelf() parent : CoreReportingModule) {
    if(parent) {
      throw new Error("Parent {CORE DRIVER MODULE } is loaded");
    }
  }

  static forRoot() : ModuleWithProviders<ReportingModule> {
    return {
      ngModule: ReportingModule,
    };
  }
}
