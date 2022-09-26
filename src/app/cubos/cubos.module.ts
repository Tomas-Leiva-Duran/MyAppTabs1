import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CubosPageRoutingModule } from './cubos-routing.module';

import { CubosPage } from './cubos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CubosPageRoutingModule
  ],
  declarations: [CubosPage]
})
export class CubosPageModule {}
