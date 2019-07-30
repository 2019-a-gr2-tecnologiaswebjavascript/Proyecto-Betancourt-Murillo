import { Injectable } from '@angular/core';
import { ClientHandler } from 'src/app/interfaces/ClientHandler';
import { UserHttpService } from '../http/user-http/user-http.service';
import { UserHandlerService } from '../http/user-handler-http/user-handler.service';
import { Warehouse } from 'src/app/interfaces/Warehouse';
import { WarehouseHttpService } from '../http/warehouse-http/warehouse-http.service';
import { Order } from 'src/app/interfaces/Order';
import { OrderHttpService } from '../http/order-http/order-http.service';
import { Product } from 'src/app/interfaces/Product';
import { ProductHttpService } from '../http/product-http/product-http.service';
import { Sale } from 'src/app/interfaces/Sale';
import { SaleHttpService } from '../http/sale-http/sale-http.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  clients : ClientHandler[] = []
  warehouses : Warehouse[] = []
  orders : Order[] = []
  products : Product[] = []
  sales : Sale[] = []

  constructor(private readonly _clientHandler: UserHandlerService,
    private readonly _warehouseHttp : WarehouseHttpService,
    private readonly _orderHttp : OrderHttpService,
    private readonly _productHttp : ProductHttpService,
    private readonly _saleHttp : SaleHttpService) { }

  async initialize(){
    this.clients = await this._clientHandler.customGet('/clientHandler').toPromise()
    this.warehouses = await this._warehouseHttp.customGet('/allWarehouses').toPromise()
    this.orders = await this._orderHttp.customGet('/allOrders').toPromise()
    this.products = await this._productHttp.buscarTodos().toPromise()
    this.sales = await this._saleHttp.customGet('/allSales').toPromise()
  }

}
