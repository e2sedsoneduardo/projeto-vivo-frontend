import { Component } from '@angular/core';
import { StatusPessoaService } from '../service/status-pessoa.service';
import { AcaoJudicialService } from '../service/acao-judicial.service';
import { ActivatedRoute } from '@angular/router';
import { AcaoJudicial } from '../model/acao-judicial.model';
import { StatusPessoa } from '../model/status-pessoa.model';
import { Endpoints } from '../constants/endpoints.enum';

@Component({
  selector: 'app-obtem-acao-judicial-por-documento',
  templateUrl: './obtem-acao-judicial-por-documento.component.html',
  styleUrls: ['./obtem-acao-judicial-por-documento.component.css']
})
export class ObtemAcaoJudicialPorDocumentoComponent {

  cpf_cnpj: string="";
  acaoJudicial!: AcaoJudicial;
  acoesJudiciais: AcaoJudicial[]=[];
  statusPessoa = new StatusPessoa();

  constructor( private acaoJudicialService: AcaoJudicialService,
    private route: ActivatedRoute
   ) { }

   ngOnInit(): void {
    this.cpf_cnpj = this.route.snapshot.params['cpf_cnpj'];
    this.obterDadosDaAcaoJudicialPorDocumento(this.cpf_cnpj);
  }


  obterDadosDaAcaoJudicialPorDocumento(cpf_cnpj: string)
  {
    this.acaoJudicial= new AcaoJudicial();
    this.acaoJudicialService.selectById(cpf_cnpj,Endpoints.ACAO_JUDICIAL_URL).subscribe( data => {
      this.acaoJudicial = data;
      if(Array.isArray(this.acaoJudicial))
          this.acaoJudicial = this.acaoJudicial[0];
    });
  }
  }

