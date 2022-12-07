import {NgModule} from "@angular/core";
import { CoreEmailModule } from "projects/email/src/lib/email/core-email.module";

@NgModule({
            imports     : [
              CoreEmailModule.forRoot(),
            ],
          })
export class NgxEmailModule {}
