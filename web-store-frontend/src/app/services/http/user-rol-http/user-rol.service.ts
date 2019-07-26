import { Injectable } from '@angular/core';
import { HttpPrincipalService } from '../http-principal/http-principal.service';
import { UsuarioRol } from 'src/app/interfaces/UsuarioRol';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRolService extends HttpPrincipalService<UsuarioRol> {

  constructor(private readonly _httpClient : HttpClient) {
    super(_httpClient, environment.url, '/UsuarioRol')
   }
}

