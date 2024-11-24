import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovaAbaPage } from './nova-aba.page';

const routes: Routes = [
  {
    path: '',
    component: NovaAbaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovaAbaPageRoutingModule {}
