import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JogosAoVivoPage } from './jogos-ao-vivo.page';

const routes: Routes = [
  {
    path: '',
    component: JogosAoVivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JogosAoVivoPageRoutingModule {}
