import { Component } from '@angular/core';
import { AcaoJudicialService } from '../service/acao-judicial.service';
import { AcaoJudicial } from '../model/acao-judicial.model';
import { Endpoints } from '../constants/endpoints.enum';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-acao-judicial',
  templateUrl: './lista-acao-judicial.component.html',
  styleUrls: ['./lista-acao-judicial.component.css']
})
export class ListaAcaoJudicialComponent {

  constructor(private acaoJudicialService: AcaoJudicialService,
    private router: Router){}

  acoesJudiciais: AcaoJudicial[] = [];

  ngOnInit(): void {
    this.obterListaAcoesJudiciais();
  }

  private obterListaAcoesJudiciais(){
    this.acaoJudicialService.select(Endpoints.ACAO_JUDICIAL_URL).subscribe(data=> {
      console.log(data);
      this.acoesJudiciais = data;
    })
  };


  obtemAcaoJudicialPorDocumento(cpf_cnpj: string){
    this.router.navigate(['/obtem-acao-judicial', cpf_cnpj]);
  }

  atualizaAcaoJudicial(cpf_cnpj: string){
    this.router.navigate(['/atualiza-acao-judicial', cpf_cnpj]);
  }

  deletaAcaoJudicial(cpf_cnpj: string){
    this.acaoJudicialService.delete(cpf_cnpj, Endpoints.ACAO_JUDICIAL_URL).subscribe( data => {
     console.log(data);
    });
    this.obterListaAcoesJudiciais();
  }

  




}
