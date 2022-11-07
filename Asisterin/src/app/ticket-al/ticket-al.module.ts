import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TicketAlPageRoutingModule } from './ticket-al-routing.module';

import { TicketAlPage } from './ticket-al.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TicketAlPageRoutingModule
  ],
  declarations: [TicketAlPage]
})
export class TicketAlPageModule {}
