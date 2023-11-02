import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto-vivo-frontend';

  constructor(private _router: Router) { }

  listarAcoesJudiciais(){
    try{
      console.log("lista ações judiciais")
      this._router.navigateByUrl('acoes-judiciais');
    }catch(e){
      console.error((e as Error).message)
    }
  }

  criaAcaoJudicial(){
    console.log("cria ação judicial")
    this._router.navigate(['/cria-acao-judicial'])
  }
}
