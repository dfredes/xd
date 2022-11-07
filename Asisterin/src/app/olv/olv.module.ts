import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OlvPageRoutingModule } from './olv-routing.module';

import { OlvPage } from './olv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OlvPageRoutingModule
  ],
  declarations: [OlvPage]
})
export class OlvPageModule {}
