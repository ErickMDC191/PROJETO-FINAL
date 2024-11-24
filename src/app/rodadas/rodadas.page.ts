import { Component, OnInit } from '@angular/core';
import { ApiFutebolService } from '../services/api-futebol.service';

@Component({
  selector: 'app-rodadas',
  templateUrl: './rodadas.page.html',
  styleUrls: ['./rodadas.page.scss'],
})
export class RodadasPage implements OnInit {
  isLoading = true; // Controle de carregamento
  rodadaInfo: any; // Informações da rodada atual
  rodadasDisponiveis: any[] = []; // Lista de rodadas disponíveis
  campeonatoId = 10; // Substitua pelo ID do campeonato desejado
  partidaExpandida: number | null = null; // Controla qual partida está expandida

  constructor(private apiFutebolService: ApiFutebolService) {}

  ngOnInit() {
    this.carregarRodadasDisponiveis();
    this.carregarRodadaAtual();
  }

  /**
   * Carregar todas as rodadas disponíveis para o seletor
   */
  carregarRodadasDisponiveis() {
    this.apiFutebolService.getRodadas(this.campeonatoId).subscribe(
      (rodadas) => {
        this.rodadasDisponiveis = rodadas;
      },
      (error) => {
        console.error('Erro ao carregar rodadas:', error);
      }
    );
  }

  getStatusClass(status: string): string {
    const statusLowerCase = status.toLowerCase().trim(); // Trima e converte para minúsculo
  
    switch (statusLowerCase) {
      case 'em andamento':
        return 'status-ongoing';  // Verde para em andamento
      case 'encerrado':
        return 'status-ended';  // Vermelho para encerradas
      case 'agendado':
        return 'status-scheduled';  // Cinza para agendadas
      default:
        return '';  // Nenhuma classe
    }
  }
  
  

  /**
   * Carregar a rodada atual
   */
  carregarRodadaAtual() {
    // Aqui, utilizamos a rodada 1 como exemplo. Pode ser ajustado para lógica dinâmica
    const rodadaAtual = 1;
    this.alterarRodada(rodadaAtual);
  }

  /**
   * Alterar para uma rodada específica
   * @param rodadaEscolhida Número da rodada escolhida
   */
  alterarRodada(rodadaEscolhida: number) {
    this.isLoading = true;
    this.apiFutebolService.getRodada(this.campeonatoId, rodadaEscolhida).subscribe(
      (rodada) => {
        this.rodadaInfo = rodada;
        this.isLoading = false;
      },
      (error) => {
        console.error('Erro ao carregar rodada:', error);
        this.isLoading = false;
      }
    );
  }

  /**
   * Expande ou colapsa os detalhes de uma partida
   * @param partidaId ID da partida a ser expandida
   */
  abrirDetalhes(partidaId: number) {
    this.partidaExpandida = this.partidaExpandida === partidaId ? null : partidaId;
  }
}
