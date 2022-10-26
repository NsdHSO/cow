import {NgModule} from "@angular/core";
import { CoreEmailModule } from "projects/email/src/public-api";

@NgModule({
            imports     : [
              CoreEmailModule.forRoot(),
            ],
          })
export class NgxEmailModule {}
