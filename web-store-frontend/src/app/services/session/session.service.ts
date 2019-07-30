import { Injectable } from '@angular/core';
import { ClientHandler } from 'src/app/interfaces/ClientHandler';
import { UserHttpService } from '../http/user-http/user-http.service';
import { UserHandlerService } from '../http/user-handler-http/user-handler.service';
import { Warehouse } from 'src/app/interfaces/Warehouse';
import { WarehouseHttpService } from '../http/warehouse-http/warehouse-http.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  clients : ClientHandler[] = []
  warehouses : Warehouse[] = []

  constructor(private readonly _clientHandler: UserHandlerService,
    private readonly _warehouseHttp : WarehouseHttpService) { }

  async initialize(){
    this.clients = await this._clientHandler.customGet('/clientHandler').toPromise()
    this.warehouses = await this._warehouseHttp.customGet('/allWarehouses').toPromise()
  }

}
