import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiFutebolService {
  private apiUrl = 'https://api.api-futebol.com.br/v1';
  private apiKey = 'live_c72acd346f5c694254b3b9b54ae560';

  constructor(private http: HttpClient) {}

  // Configurar headers
  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${this.apiKey}`,
    });
  }

  // Método para buscar dados de campeonatos
  getCampeonato(campeonatoId: number): Observable<any> {
    const url = `${this.apiUrl}/campeonatos/${campeonatoId}`;
    return this.http.get(url, { headers: this.getHeaders() });
  }

  // Método para buscar a tabela de classificação
  getTabela(campeonatoId: number): Observable<any> {
    const url = `${this.apiUrl}/campeonatos/${campeonatoId}/tabela`;
    return this.http.get(url, { headers: this.getHeaders() });
  }

  // Método para buscar partidas recentes
  getPartidasRecentes(dataMax: string): Observable<any> {
    const url = `${this.apiUrl}/partidas?data_max=${dataMax}&status=encerrado`;
    return this.http.get(url, { headers: this.getHeaders() });
  }

  // Método para buscar partidas ao vivo
  getPartidasAoVivo(): Observable<any> {
    const url = `${this.apiUrl}/ao-vivo`;
    return this.http.get(url, { headers: this.getHeaders() });
  }

  // Método para buscar uma rodada específica
  getRodada(campeonatoId: number, rodada: number): Observable<any> {
    const url = `${this.apiUrl}/campeonatos/${campeonatoId}/rodadas/${rodada}`;
    return this.http.get(url, { headers: this.getHeaders() });
  }

  // Método para buscar todas as rodadas de um campeonato
  getRodadas(campeonatoId: number): Observable<any> {
    const url = `${this.apiUrl}/campeonatos/${campeonatoId}/rodadas`;
    return this.http.get(url, { headers: this.getHeaders() });
  }
}
