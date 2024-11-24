import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RodadasPageRoutingModule } from './rodadas-routing.module';

import { RodadasPage } from './rodadas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RodadasPageRoutingModule
  ],
  declarations: [RodadasPage]
})
export class RodadasPageModule {}
