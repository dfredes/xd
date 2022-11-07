import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OlvPage } from './olv.page';

const routes: Routes = [
  {
    path: '',
    component: OlvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OlvPageRoutingModule {}
