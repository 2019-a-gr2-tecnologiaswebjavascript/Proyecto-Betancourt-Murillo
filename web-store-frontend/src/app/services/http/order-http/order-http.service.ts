import { Injectable } from '@angular/core';
import { HttpPrincipalService } from '../http-principal/http-principal.service';
import { Order } from 'src/app/interfaces/Order';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderHttpService extends HttpPrincipalService<Order> {

  constructor(private readonly _clientHttp : HttpClient) {
    super(_clientHttp, environment.url, '/Pedido')
   }
}
