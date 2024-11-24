import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovaAbaPageRoutingModule } from './nova-aba-routing.module';

import { NovaAbaPage } from './nova-aba.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovaAbaPageRoutingModule
  ],
  declarations: [NovaAbaPage]
})
export class NovaAbaPageModule {}
