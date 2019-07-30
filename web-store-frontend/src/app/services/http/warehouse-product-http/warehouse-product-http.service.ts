import { Injectable } from '@angular/core';
import { HttpPrincipalService } from '../http-principal/http-principal.service';
import { WarehouseProduct } from 'src/app/interfaces/WarehouseProduct';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WarehouseProductHttpService extends HttpPrincipalService<WarehouseProduct>{

  constructor(private readonly _httpClient : HttpClient) {
    super(_httpClient, environment.url, '/BodegaProducto')
   }
}
