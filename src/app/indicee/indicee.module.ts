import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndiceePageRoutingModule } from './indicee-routing.module';

import { IndiceePage } from './indicee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndiceePageRoutingModule
  ],
  declarations: [IndiceePage]
})
export class IndiceePageModule {}
