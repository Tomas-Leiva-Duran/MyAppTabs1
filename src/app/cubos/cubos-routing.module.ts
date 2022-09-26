import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CubosPage } from './cubos.page';

const routes: Routes = [
  {
    path: '',
    component: CubosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CubosPageRoutingModule {}
