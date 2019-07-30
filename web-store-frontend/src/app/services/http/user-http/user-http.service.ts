import { Injectable } from '@angular/core';
import { HttpPrincipalService } from '../http-principal/http-principal.service';
import { User } from 'src/app/interfaces/User';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService extends HttpPrincipalService<User>{

  constructor(private readonly _httpClient : HttpClient) {
    super(_httpClient, environment.url,'/Usuario')
  }

}
