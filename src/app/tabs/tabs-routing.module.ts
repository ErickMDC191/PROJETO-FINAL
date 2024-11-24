import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';  // Certifique-se de importar a página corretamente

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'principal',
        loadChildren: () => import('../principal/principal.module').then(m => m.PrincipalPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../perfil/perfil.module').then(m => m.PerfilPageModule)
      },

      {
        path: 'jogos-ao-vivo',
        loadChildren: () => import('../jogos-ao-vivo/jogos-ao-vivo.module').then(m => m.JogosAoVivoPageModule)
      },

      {
        path: 'rodadas',
        loadChildren: () => import('../rodadas/rodadas.module').then(m => m.RodadasPageModule)
      },
        {
          path: 'nova-aba',
          loadChildren: () => import('../nova-aba/nova-aba.module').then(m => m.NovaAbaPageModule)
        },

      {
        path: '',
        redirectTo: '/tabs/principal',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
