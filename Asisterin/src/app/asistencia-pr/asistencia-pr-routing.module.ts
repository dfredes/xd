import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsistenciaPrPage } from './asistencia-pr.page';

const routes: Routes = [
  {
    path: '',
    component: AsistenciaPrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsistenciaPrPageRoutingModule {}
