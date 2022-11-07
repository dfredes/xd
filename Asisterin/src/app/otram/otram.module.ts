import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtramPageRoutingModule } from './otram-routing.module';

import { OtramPage } from './otram.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtramPageRoutingModule
  ],
  declarations: [OtramPage]
})
export class OtramPageModule {}
