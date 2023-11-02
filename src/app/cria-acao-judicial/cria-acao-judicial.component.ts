import { Component, ElementRef, ViewChild } from '@angular/core';
import { AcaoJudicialService } from '../service/acao-judicial.service';
import { StatusPessoaService } from '../service/status-pessoa.service';
import { Router } from '@angular/router';
import { StatusPessoa } from '../model/status-pessoa.model';
import { Endpoints } from '../constants/endpoints.enum';
import { AcaoJudicial } from '../model/acao-judicial.model';

@Component({
  selector: 'app-cria-acao-judicial',
  templateUrl: './cria-acao-judicial.component.html',
  styleUrls: ['./cria-acao-judicial.component.css']
})
export class CriaAcaoJudicialComponent {

  @ViewChild('status') status!: ElementRef;
  acaoJudicial: AcaoJudicial = new AcaoJudicial();
  listaStatusPessoa: StatusPessoa[] =[];
  status_id!: number;

  constructor(private acaoJudicialService: AcaoJudicialService,
    private statusPessoaService: StatusPessoaService,
    private router: Router){}

    ngOnInit(): void {
      this.obterListaDeStatusPessoa();
    }

    obterListaDeStatusPessoa(){
      this.statusPessoaService.select(Endpoints.STATUS_PESSOA_URL).subscribe(data =>{
        this.listaStatusPessoa = data;
      },error => console.error("Erro ao obter a lista de status de pessoas"));
    }

    salvarAcaoJudicial(){
      this.acaoJudicial.status_id = this.status_id;
      this.acaoJudicialService.insert(this.acaoJudicial,Endpoints.ACAO_JUDICIAL_URL).subscribe( data =>{
        console.log(data);
      },
      error => console.log(error));
      this.vaiParaAListaDeAcoesJudiciais();
    }
  
    vaiParaAListaDeAcoesJudiciais(){
      this.router.navigate(['/acoes-judiciais']);
    }

    onSelected(){
        this.status_id = this.status.nativeElement.value;
    }
    
    onSubmit(){
      this.salvarAcaoJudicial();
    }

}
