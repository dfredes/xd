import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumPage } from './alum.page';

const routes: Routes = [
  {
    path: '',
    component: AlumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumPageRoutingModule {}
