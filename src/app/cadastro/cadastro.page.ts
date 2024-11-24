import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {
  formData = {
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    dataNascimento: '',
    sexo: '',
    timeFavorito: ''
  };

  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private navCtrl: NavController,
    private toastController: ToastController
  ) {}

  async cadastrarUsuario() {
    // Validações básicas
    if (this.formData.senha !== this.formData.confirmarSenha) {
      this.presentToast('As senhas não coincidem.');
      return;
    }

    try {
      // Criação do usuário no Firebase Auth
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(
        this.formData.email,
        this.formData.senha
      );

      // Adiciona informações adicionais no Firestore
      await this.firestore.collection('users').doc(userCredential.user?.uid).set({
        nome: this.formData.nome,
        email: this.formData.email,
        dataNascimento: this.formData.dataNascimento,
        sexo: this.formData.sexo,
        timeFavorito: this.formData.timeFavorito
      });

      // Verificando se os dados foram salvos no Firestore
      console.log("Dados do usuário salvos no Firestore com sucesso!");

      this.presentToast('Cadastro realizado com sucesso!');
      this.navCtrl.navigateRoot('/login'); // Redirecionar após sucesso
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      this.presentToast('Erro ao realizar o cadastro. Tente novamente.');
    }
  }

  // Método para exibir mensagens
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'top'
    });
    await toast.present();
  }
}
