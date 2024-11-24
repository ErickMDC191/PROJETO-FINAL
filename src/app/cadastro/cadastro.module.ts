import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';  // Verifique se esta importação está presente
import { CadastroPageRoutingModule } from './cadastro-routing.module';
import { CadastroPage } from './cadastro.page';
import { ReactiveFormsModule } from '@angular/forms';  // Certifique-se de ter isso também para formularios reativos

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,      // Módulo para formulários reativos
    IonicModule,              // IonicModule precisa ser importado para usar os componentes do Ionic
    CadastroPageRoutingModule
  ],
  declarations: [CadastroPage]
})
export class CadastroPageModule {}
