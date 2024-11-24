import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
})
export class EditarPerfilPage implements OnInit {
  userData = {
    nome: '',
    email: '',
    dataNascimento: '',
    sexo: '',
    timeFavorito: ''
  };

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.carregarDadosUsuario();
  }

  // Método para carregar os dados do usuário
  async carregarDadosUsuario() {
    const user = await this.afAuth.currentUser;
    if (user) {
      this.userData.email = user.email || '';
      this.userData.nome = user.displayName || '';
      // Aqui você pode carregar outros dados do usuário se necessário
      this.verificarEmail(); // Verifica se o e-mail foi confirmado
    }
  }

  // Método para verificar se o e-mail foi confirmado
  async verificarEmail() {
    const user = await this.afAuth.currentUser;
    if (user) {
      await user.reload();  // Força o recarregamento do usuário
      if (user.emailVerified) {
        console.log('E-mail verificado com sucesso!');
      } else {
        console.log('E-mail não verificado ainda.');
        this.exibirAviso('Por favor, verifique seu e-mail antes de continuar.', 'danger');
        this.router.navigate(['/login']); // Opcional: redireciona para o login se o e-mail não for verificado
      }
    }
  }

  // Método para atualizar o nome do usuário
  async atualizarNome() {
    const user = await this.afAuth.currentUser;
    if (user) {
      try {
        await user.updateProfile({ displayName: this.userData.nome, photoURL: user.photoURL });
        this.exibirAviso('Nome atualizado com sucesso!', 'success');
      } catch (error) {
        console.error('Erro ao atualizar nome:', error);
        this.exibirAviso('Erro ao atualizar nome. Tente novamente.', 'danger');
      }
    }
  }

  // Método para atualizar o e-mail do usuário
  async atualizarEmail() {
    const user = await this.afAuth.currentUser;
    if (user) {
      try {
        await user.updateEmail(this.userData.email);
        this.exibirAviso('E-mail atualizado com sucesso!', 'success');
      } catch (error) {
        console.error('Erro ao atualizar e-mail:', error);
        this.exibirAviso('Erro ao atualizar e-mail. Tente novamente.', 'danger');
      }
    }
  }

  // Método para enviar o e-mail de verificação novamente
  private async enviarEmailVerificacao() {
    const user = await this.afAuth.currentUser;
    if (user) {
      try {
        await user.sendEmailVerification(); // Envia o e-mail de verificação
        console.log('E-mail de verificação enviado');
        this.exibirAviso('E-mail de verificação enviado. Verifique sua caixa de entrada!', 'warning');
      } catch (error) {
        console.error('Erro ao enviar e-mail de verificação:', error);
        this.exibirAviso('Erro ao enviar e-mail de verificação. Tente novamente.', 'danger');
      }
    }
  }

  // Exibe uma mensagem de aviso para o usuário
  async exibirAviso(mensagem: string, color: 'success' | 'danger' | 'warning') {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 3000,
      position: 'top',
      color: color,
    });
    await toast.present();
  }

  // Método para cancelar a edição
  cancelarEdicao() {
    this.router.navigate(['/perfil']);  // Redireciona de volta para a página de perfil
  }

}
