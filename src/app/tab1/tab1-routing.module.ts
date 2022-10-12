import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: 'tabs1',
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
        path: 'cuadrado3',
        loadChildren: () => import('../indicee/indicee.module').then(m => m.IndiceePageModule)
      },
      {
        path: 'otro4',
        loadChildren: () => import('../casa/casa.module').then(m => m.CasaPageModule)
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
