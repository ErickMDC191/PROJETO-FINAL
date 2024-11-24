import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JogosAoVivoPageRoutingModule } from './jogos-ao-vivo-routing.module';

import { JogosAoVivoPage } from './jogos-ao-vivo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JogosAoVivoPageRoutingModule
  ],
  declarations: [JogosAoVivoPage]
})
export class JogosAoVivoPageModule {}
