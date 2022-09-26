import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: Tab1Page,
    children: [
      {
        path: 'triangulo1',
        loadChildren: () => import('../prueba/prueba.module').then(m => m.PruebaPageModule)
      },
      {
        path: 'circulo2',
        loadChildren: () => import('../access/access.module').then(m => m.AccessPageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    component: Tab1Page,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
