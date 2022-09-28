import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes : Routes = [
  {
    path        : '',
    loadChildren: () => import('./@core/cow-module').then(
      m => m.NgxCowModule),
  },
];

@NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule],
          })
export class AppRoutingModule {}
