import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'access',
    loadChildren: () => import('./access/access.module').then( m => m.AccessPageModule)
  },
  {
    path: 'prueba',
    loadChildren: () => import('./prueba/prueba.module').then( m => m.PruebaPageModule)
  },
  {
    path: 'cubos',
    loadChildren: () => import('./cubos/cubos.module').then( m => m.CubosPageModule)
  },
  {
    path: 'casa',
    loadChildren: () => import('./casa/casa.module').then( m => m.CasaPageModule)
  },
  {
    path: 'indicee',
    loadChildren: () => import('./indicee/indicee.module').then( m => m.IndiceePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
