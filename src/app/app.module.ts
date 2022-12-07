import {
  HTTP_INTERCEPTORS,
  HttpClientModule
} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DlDateTimeDateModule} from 'angular-bootstrap-datetimepicker';
import {IconCoreModule} from 'ngx-liburg-icon';
import {
  IConfig,
  NgxMaskModule
} from 'ngx-mask';
import {environment} from '../environments/environment';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpInterceptorService} from './utils/http-interceptor.service';
import {VariableInterceptor} from './utils/variable.interceptor';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    IconCoreModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DlDateTimeDateModule,
    NgxMaskModule.forRoot(maskConfig),
  ],
  providers: [
    {
      provide: 'env',
      useValue: environment
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: VariableInterceptor,
      multi: true
    },
    MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
