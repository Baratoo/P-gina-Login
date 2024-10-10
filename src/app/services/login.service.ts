
import { Injectable } from '@angular/core';
import { LoginResoponse } from '../types/login-response.type';
import { tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(nome: string, senha: string){
    return this.httpClient.post<LoginResoponse>("/login", {nome, senha}).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token)
        sessionStorage.setItem("username", value.nome)
      })
    )
  }



}
