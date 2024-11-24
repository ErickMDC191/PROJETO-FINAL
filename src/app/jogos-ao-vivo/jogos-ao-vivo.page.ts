import { Component, OnInit } from '@angular/core';
import { ApiFutebolService } from '../services/api-futebol.service';

@Component({
  selector: 'app-jogos-ao-vivo',
  templateUrl: './jogos-ao-vivo.page.html',
  styleUrls: ['./jogos-ao-vivo.page.scss'],
})
export class JogosAoVivoPage implements OnInit {
  jogosAoVivo: any[] = [];
  partidasRecentes: any[] = [];
  isLoading = true;

  constructor(private apiFutebolService: ApiFutebolService) {}

  ngOnInit() {
    this.carregarJogosAoVivo();
  }

  carregarJogosAoVivo() {
    this.isLoading = true;
    this.apiFutebolService.getPartidasAoVivo().subscribe({
      next: (dados) => {
        this.jogosAoVivo = dados;
        if (this.jogosAoVivo.length === 0) {
          this.carregarPartidasRecentes(); // Busca partidas recentes se não houver jogos ao vivo
        } else {
          this.isLoading = false;
        }
      },
      error: (erro) => {
        console.error('Erro ao carregar jogos ao vivo:', erro);
        this.isLoading = false;
      },
    });
  }

  carregarPartidasRecentes() {
    const dataAtual = new Date().toISOString().split('T')[0]; // Data atual no formato YYYY-MM-DD
    this.apiFutebolService.getPartidasRecentes(dataAtual).subscribe({
      next: (dados) => {
        this.partidasRecentes = dados;
        this.isLoading = false;
      },
      error: (erro) => {
        console.error('Erro ao carregar partidas recentes:', erro);
        this.isLoading = false;
      },
    });
  }
}
