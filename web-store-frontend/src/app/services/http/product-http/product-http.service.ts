import { Injectable } from '@angular/core';
import { HttpPrincipalService } from '../http-principal/http-principal.service';
import { Product } from 'src/app/interfaces/Product';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService extends HttpPrincipalService<Product>{

  constructor(private readonly _clientHttp: HttpClient) {
    super(_clientHttp, environment.url, '/Producto')
   }
}
