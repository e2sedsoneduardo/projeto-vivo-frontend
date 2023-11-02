import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StatusPessoa } from '../model/status-pessoa.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusPessoaService {

  constructor(private http: HttpClient) { }

  select(url:string): Observable<StatusPessoa[]>{
    return this.http.get<StatusPessoa[]>(url,{'headers' : new HttpHeaders ({'Content-Type' : 'application/json', 'Access-Control-Allow-Origin': '*'})});
  }

  selectById(status_id:number , url:string): Observable<StatusPessoa>{
    return this.http.get<StatusPessoa>(`${url}/${status_id}`, {'headers' : new HttpHeaders ({'Content-Type' : 'application/json', 'Access-Control-Allow-Origin': '*'})});
  }
}
