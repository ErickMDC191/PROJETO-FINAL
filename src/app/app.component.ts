import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor(
    private afAuth: AngularFireAuth,
    private navCtrl: NavController
  ) {}

  logout() {
    this.afAuth.signOut().then(() => {
      this.navCtrl.navigateRoot('/login'); // Redirecionar para login
    }).catch(error => {
      console.error('Erro ao deslogar:', error);
    });
  }
}
