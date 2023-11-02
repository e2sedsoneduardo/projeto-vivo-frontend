import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListaAcaoJudicialComponent } from './lista-acao-judicial/lista-acao-judicial.component';
import { CriaAcaoJudicialComponent } from './cria-acao-judicial/cria-acao-judicial.component';
import { AtualizaAcaoJudicialComponent } from './atualiza-acao-judicial/atualiza-acao-judicial.component';
import { ObtemAcaoJudicialPorDocumentoComponent } from './obtem-acao-judicial-por-documento/obtem-acao-judicial-por-documento.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const routes: Routes = [
  {path: 'acoes-judiciais', component: ListaAcaoJudicialComponent},
  {path: 'cria-acao-judicial', component: CriaAcaoJudicialComponent},
  {path: 'atualiza-acao-judicial/:cpf_cnpj', component: AtualizaAcaoJudicialComponent},
  {path: 'obtem-acao-judicial/:cpf_cnpj', component: ObtemAcaoJudicialPorDocumentoComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
