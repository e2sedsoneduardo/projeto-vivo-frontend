import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AcaoJudicial } from '../model/acao-judicial.model';
import { AcaoJudicialDTO } from '../model/acao-judicial.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcaoJudicialService {

  constructor(private http: HttpClient) { }

  insert(content: AcaoJudicial, url: string): Observable<Object>{
    return this.http.post<AcaoJudicial>(url,content,{'headers' : new HttpHeaders ({'Content-Type' : 'application/json', 'Access-Control-Allow-Origin': '*'}),observe:"response"});
  }

  update(cpf_cnpj:string, content:AcaoJudicialDTO, url: string ): Observable<Object>{
    return this.http.put<AcaoJudicialDTO>(`${url}/${cpf_cnpj}`, content, {'headers' : new HttpHeaders ({'Content-Type' : 'application/json', 'Access-Control-Allow-Origin': '*'}),observe:"response"});
  }

  delete(cpf_cnpj:string, url: string): Observable<Object>{
    return this.http.delete(`${url}/${cpf_cnpj}`, {'headers' : new HttpHeaders ({'Content-Type' : 'application/json', 'Access-Control-Allow-Origin': '*'}), observe: "response"});
  }

  select(url:string): Observable<AcaoJudicial[]>{
    return this.http.get<AcaoJudicial[]>(url,{'headers' : new HttpHeaders ({'Content-Type' : 'application/json', 'Access-Control-Allow-Origin': '*'})});
  }

  selectById(cpf_cnpj:string , url:string): Observable<AcaoJudicial>{
    return this.http.get<AcaoJudicial>(`${url}/${cpf_cnpj}`, {'headers' : new HttpHeaders ({'Content-Type' : 'application/json', 'Access-Control-Allow-Origin': '*'})});
  }
}
