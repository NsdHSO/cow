import {HttpClientModule} from "@angular/common/http";
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {environment} from "../environments/environment";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

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
                provide : 'env',
                useValue: environment,
              },
            ], bootstrap: [AppComponent],
          })
export class AppModule {}
