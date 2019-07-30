import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session/session.service';
import { environment } from 'src/environments/environment';
import { CarritoService } from 'src/app/services/carrito/carrito.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-route-new-order',
  templateUrl: './route-new-order.component.html',
  styleUrls: ['./route-new-order.component.css']
})
export class RouteNewOrderComponent implements OnInit {

  products = []
  urlArray = []
  warehouses = []
  warehouseId = 1
  cart
  totalCost

  constructor(private readonly _session : SessionService,
    private readonly _cart : CarritoService,
    private readonly _location : Location) { }

  ngOnInit() {
    this.warehouses = this._session.warehouses
    this.products = this._session.products
    this.products.forEach(product=>{
      this.urlArray.push(`${environment.url}/picture?id=${product.id}`)
    })
    this.cart = this._cart.detalleCarrito
    this.totalCost = this._cart.costoTotal[0]
  }

  addToCart(item){
    this._cart.insertarAlCarrito(item)
  }

  removeFromCart(item){
    this._cart.quitarCarrito(item)
  }

  async shop(){
    const shop = {
      'fecha': this.currentDate(),
      'bodega' : this.warehouseId,
      'finalizado' : false,
      'productos' : this.cart
    }
    await this._cart.finalizarCompra(shop)
    await this._session.initialize()
    this._location.back()
  }

  currentDate(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    var todayStr = dd + '/' + mm + '/' + yyyy;
    return todayStr
  }

}
