import { Injectable } from '@angular/core';
import { HttpPrincipalService } from '../http-principal/http-principal.service';
import { Warehouse } from 'src/app/interfaces/Warehouse';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WarehouseHttpService extends HttpPrincipalService<Warehouse> {

  constructor(private readonly _httpClient : HttpClient) { 
    super(_httpClient, environment.url, '/Bodega')
  }
}
