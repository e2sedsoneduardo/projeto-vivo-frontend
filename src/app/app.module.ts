import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AtualizaAcaoJudicialComponent } from './atualiza-acao-judicial/atualiza-acao-judicial.component';
import { CriaAcaoJudicialComponent } from './cria-acao-judicial/cria-acao-judicial.component';
import { ListaAcaoJudicialComponent } from './lista-acao-judicial/lista-acao-judicial.component';
import { AppRoutingModule } from './app-routing.module';
import { ObtemAcaoJudicialPorDocumentoComponent } from './obtem-acao-judicial-por-documento/obtem-acao-judicial-por-documento.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AtualizaAcaoJudicialComponent,
    CriaAcaoJudicialComponent,
    ListaAcaoJudicialComponent,
    ObtemAcaoJudicialPorDocumentoComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
