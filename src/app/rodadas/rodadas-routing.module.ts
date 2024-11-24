import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RodadasPage } from './rodadas.page';

const routes: Routes = [
  {
    path: '',
    component: RodadasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RodadasPageRoutingModule {}
