import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NavController, AlertController } from '@ionic/angular'; // AlertController importado

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  userData: any = {};  // Para armazenar os dados do usuário
  loading: boolean = true; // Para controlar o estado de carregamento

  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private navCtrl: NavController,
    private alertController: AlertController // Adicionando AlertController
  ) {}

  ngOnInit() {
    // Aguardar que o usuário esteja autenticado
    this.afAuth.onAuthStateChanged(user => {
      if (user) {
        // Usuário autenticado, buscar dados do Firestore
        this.firestore.collection('users').doc(user.uid).get().subscribe(doc => {
          if (doc.exists) {
            // Dados do usuário encontrados
            this.userData = doc.data();
          } else {
            console.error('Documento não encontrado!');
            this.userData = {}; // Limpar os dados em caso de erro
          }
          this.loading = false; // Atualiza o estado de carregamento
        }, (error) => {
          console.error('Erro ao carregar dados do usuário:', error);
          this.loading = false; // Atualiza o estado de carregamento
        });
      } else {
        // Usuário não autenticado, redirecionar para a tela de login
        this.navCtrl.navigateRoot('/login');
      }
    });
  }

  // Método para editar o perfil
  async editarPerfil() {
    const alert = await this.alertController.create({
      header: 'Editar Perfil',
      message: 'Funcionalidade de edição do perfil em construção.',
      buttons: ['OK']
    });

    await alert.present();
  }
  
  // Método para realizar logout
  async logout() {
    try {
      await this.afAuth.signOut();
      // Criando o alert após o logout
      const alert = await this.alertController.create({
        header: 'Logout',
        message: 'Você foi desconectado com sucesso!',
        buttons: ['OK']
      });
      await alert.present();
      // Redirecionar para a página de login após o logout
      this.navCtrl.navigateRoot('/login');
    } catch (error) {
      console.error('Erro ao deslogar:', error);
      // Criando o alert em caso de erro no logout
      const alert = await this.alertController.create({
        header: 'Erro',
        message: 'Erro ao deslogar. Tente novamente.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}
