import { Injectable } from '@angular/core';
import { HttpPrincipalService } from '../http-principal/http-principal.service';
import { OrderProduct } from 'src/app/interfaces/OrderProduct';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderProductHttpService extends HttpPrincipalService<OrderProduct> {

  constructor(private readonly _httpClient : HttpClient) {
    super(_httpClient, environment.url, '/PedidoProducto')
   }
}
