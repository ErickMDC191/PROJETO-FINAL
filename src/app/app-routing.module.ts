import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },  // Primeiro redireciona para "inicio"
  { path: 'inicio', loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioPageModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'cadastro', loadChildren: () => import('./cadastro/cadastro.module').then(m => m.CadastroPageModule) },
  { path: 'principal', loadChildren: () => import('./principal/principal.module').then(m => m.PrincipalPageModule) },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)  // As tabs serão carregadas após o login
  },
  {
    path: 'jogos-ao-vivo',
    loadChildren: () => import('./jogos-ao-vivo/jogos-ao-vivo.module').then( m => m.JogosAoVivoPageModule)
  },
  {
    path: 'rodadas',
    loadChildren: () => import('./rodadas/rodadas.module').then( m => m.RodadasPageModule)
  },
  {
    path: 'nova-aba',
    loadChildren: () => import('./nova-aba/nova-aba.module').then( m => m.NovaAbaPageModule)
  },
  {
    path: 'editar-perfil',
    loadChildren: () => import('./editar-perfil/editar-perfil.module').then( m => m.EditarPerfilPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
