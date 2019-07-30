import { Injectable } from '@angular/core';
import { HttpPrincipalService } from '../http-principal/http-principal.service';
import { Sale } from 'src/app/interfaces/Sale';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SaleHttpService extends HttpPrincipalService<Sale> {

  constructor(private readonly _clientHttp : HttpClient) {
    super(_clientHttp, environment.url, '/Ventas')
   }
}
