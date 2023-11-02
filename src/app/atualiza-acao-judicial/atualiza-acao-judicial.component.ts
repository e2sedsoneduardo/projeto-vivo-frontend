import { Component, ViewChild, ElementRef } from '@angular/core';
import { AcaoJudicialDTO } from '../model/acao-judicial.dto';
import { StatusPessoa } from '../model/status-pessoa.model';
import { AcaoJudicialService } from '../service/acao-judicial.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StatusPessoaService } from '../service/status-pessoa.service';
import { Endpoints } from '../constants/endpoints.enum';
import { AcaoJudicial } from '../model/acao-judicial.model';

@Component({
  selector: 'app-atualiza-acao-judicial',
  templateUrl: './atualiza-acao-judicial.component.html',
  styleUrls: ['./atualiza-acao-judicial.component.css']
})
export class AtualizaAcaoJudicialComponent {

  @ViewChild('status') status!: ElementRef;
  cpf_cnpj: string="";
  acaoJudicial: AcaoJudicial = new AcaoJudicial();
  dto: AcaoJudicialDTO = new AcaoJudicialDTO();
  listaStatusPessoa: StatusPessoa[] = [];
  status_id!: number;


  constructor(private acaoJudicialService: AcaoJudicialService,
    private statusPessoaService: StatusPessoaService, 
    private route: ActivatedRoute,
    private router: Router){}

    ngOnInit(): void {
      this.obterListaDeStatusPessoa();
      this.cpf_cnpj = this.route.snapshot.params['cpf_cnpj'];
      this.obterAcaoJudicialPorDocumento(this.cpf_cnpj);
    }  

    obterListaDeStatusPessoa(){
      this.statusPessoaService.select(Endpoints.STATUS_PESSOA_URL).subscribe(data =>{
        this.listaStatusPessoa = data;
      },error => console.error("Erro ao obter a lista de status de pessoas"));
    }

    obterAcaoJudicialPorDocumento(cpf_cnpj: string){
      this.acaoJudicialService.selectById(cpf_cnpj,Endpoints.ACAO_JUDICIAL_URL).subscribe(data => {
        this.acaoJudicial = data;
      }, error => console.log(error));
    }

    atualizaAcaoJudicial(cpf_cnpj: string, dto: AcaoJudicialDTO){
      dto.status_id = this.status_id;
      this.acaoJudicialService.update(cpf_cnpj, dto, Endpoints.ACAO_JUDICIAL_URL).subscribe( data =>{
        console.log(data)
      }
      , error => console.log(error));
      this.vaiParaAListaDeAcoesJudiciais();
    }

    vaiParaAListaDeAcoesJudiciais(){
      this.router.navigate(['/acoes-judiciais']);
    }

    onSubmit(){
      this.dto.nome = this.acaoJudicial.nome;
      this.dto.status_id = this.acaoJudicial.status_id;

      this.atualizaAcaoJudicial(this.cpf_cnpj, this.dto);
    }

    onSelected(){
      this.status_id = this.status.nativeElement.value;
  }
}
