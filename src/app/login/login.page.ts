import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router'; // Importando Router
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router, // Usando o Router para navegação
    private toastController: ToastController
  ) {}

  async loginUsuario() {
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const senha = (document.getElementById('senha') as HTMLInputElement).value;

    if (!email || !senha) {
      this.exibirAviso('Por favor, preencha todos os campos.', 'danger');
      return;
    }

    try {
      const userCredential = await this.afAuth.signInWithEmailAndPassword(email, senha);
      console.log('Usuário logado com sucesso:', userCredential.user);

      // Exibe uma mensagem de sucesso
      this.exibirAviso('Login realizado com sucesso!', 'success');

      // Navega para a página de tabs após o login
      this.router.navigate(['/tabs']);  // Redireciona para as tabs
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      // Exibe uma mensagem de erro para o usuário
      this.exibirAviso('Erro ao fazer login. Verifique suas informações e tente novamente.', 'danger');
    }
  }

  async exibirAviso(mensagem: string, color: 'success' | 'danger') {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 3000,
      position: 'top',
      color: color,
    });
    await toast.present();
  }
}
