import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketAlPage } from './ticket-al.page';

const routes: Routes = [
  {
    path: '',
    component: TicketAlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketAlPageRoutingModule {}
