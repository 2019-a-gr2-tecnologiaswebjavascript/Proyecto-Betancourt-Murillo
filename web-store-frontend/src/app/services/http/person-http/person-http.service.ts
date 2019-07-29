import { Injectable } from '@angular/core';
import { HttpPrincipalService } from '../http-principal/http-principal.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Person } from 'src/app/interfaces/Person';

@Injectable({
  providedIn: 'root'
})
export class PersonHttpService extends HttpPrincipalService<Person> {

  constructor(private readonly _httpClient : HttpClient) { 
    super(_httpClient, environment.url, '/Persona')
  }
  
}
