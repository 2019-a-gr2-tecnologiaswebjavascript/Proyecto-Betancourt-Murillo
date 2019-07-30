import { Injectable } from '@angular/core';
import { ClientHandler } from 'src/app/interfaces/ClientHandler';
import { HttpPrincipalService } from '../http-principal/http-principal.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserHandlerService extends HttpPrincipalService<ClientHandler>{

  constructor(private readonly _httpClient : HttpClient) {
    super(_httpClient, environment.url,'/Usuario')
  }
}
