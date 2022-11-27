import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {NgChartsModule} from 'ng2-charts';
import {TableMaterialModule} from 'ngx-liburg';
import {
  IconCoreModule,
  SpinnerModule
} from 'ngx-liburg-icon';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {CowMeatComponent} from './cow-meat.component';
import {CowRoutingModule} from './cow-routing.module';

@NgModule({
  declarations: [
    CowMeatComponent
  ],
  imports: [
    CowRoutingModule,
    CommonModule,
    SpinnerModule,
    IconCoreModule,
    TableMaterialModule,
    NgChartsModule,
    MatButtonModule,
    MatSidenavModule,
    DashboardComponent
  ]
})
export class CowMeatModule {}
