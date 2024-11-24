import { Component, OnInit } from '@angular/core';
import { ApiFutebolService } from '../services/api-futebol.service';
import { debounceTime } from 'rxjs/operators'; // Importando o debounceTime do rxjs
import { Subject } from 'rxjs'; // Importando Subject para controle do debounce

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  tabela: any[] = []; // Tabela classificatória
  filteredTabela: any[] = []; // Tabela filtrada pelos resultados da pesquisa
  isLoadingTabela = true;   // Estado de carregamento da tabela
  errorMessageTabela = '';  // Mensagem de erro da tabela

  searchTerm: string = '';  // Variável para armazenar o termo de pesquisa
  searchSubject: Subject<string> = new Subject<string>(); // Subject para controle de pesquisa com debounce

  constructor(private apiFutebolService: ApiFutebolService) {}

  ngOnInit() {
    this.carregarTabela();

    // Observando as mudanças no termo de pesquisa com debounce
    this.searchSubject.pipe(
      debounceTime(300) // Espera 300ms após o último caractere digitado
    ).subscribe((searchTerm) => {
      this.filtrarTabela(searchTerm);
    });
  }

  // Carregar a tabela de classificação
  carregarTabela() {
    const campeonatoId = 10; // Exemplo: Série A (substitua pelo ID correto)
    this.apiFutebolService.getTabela(campeonatoId).subscribe({
      next: (data) => {
        this.tabela = data;
        this.filteredTabela = data; // Inicializa a tabela filtrada com todos os times
        this.isLoadingTabela = false;
      },
      error: (err) => {
        this.errorMessageTabela = 'Erro ao carregar a tabela.';
        this.isLoadingTabela = false;
        console.error(err);
      },
    });
  }

  // Função chamada quando o termo de pesquisa muda
  onSearchChange(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.searchSubject.next(searchTerm); // Envia o novo termo de pesquisa para o Subject
  }

  // Filtra a tabela de acordo com o termo de pesquisa
  filtrarTabela(searchTerm: string) {
    if (searchTerm.trim() === '') {
      this.filteredTabela = this.tabela;
    } else {
      this.filteredTabela = this.tabela.filter(time =>
        time.time.nome_popular.toLowerCase().includes(searchTerm)
      );
    }
  }
}
