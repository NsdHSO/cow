import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {environment} from "../environments/environment";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {HttpInterceptorService} from "./utils/http-interceptor.service";

@NgModule({
            declarations: [
              AppComponent,
            ],
            imports     : [
              BrowserModule,
              AppRoutingModule,
              HttpClientModule,
              BrowserAnimationsModule,
            ],
            providers   : [
              {
                provide : "env",
                useValue: environment,
              },
              {
                provide : HTTP_INTERCEPTORS,
                useClass: HttpInterceptorService,
                multi   : true,
              },
            ], bootstrap: [AppComponent],
          })
export class AppModule {}
