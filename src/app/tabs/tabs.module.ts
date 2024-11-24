import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';  // Certifique-se de importar o IonicModule
import { TabsPageRoutingModule } from './tabs-routing.module';  // Importação correta do arquivo de rotas
import { TabsPage } from './tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,  // Adicione o IonicModule aqui
    TabsPageRoutingModule,  // Certifique-se de que está importando o módulo de rotas corretamente
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
