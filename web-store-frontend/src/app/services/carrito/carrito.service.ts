import { Injectable } from '@angular/core';
import { OrderHttpService } from '../http/order-http/order-http.service';
import { Order } from 'src/app/interfaces/Order';
import { OrderProductHttpService } from '../http/order-product-http/order-product-http.service';
import { WarehouseProductHttpService } from '../http/warehouse-product-http/warehouse-product-http.service';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  detalleCarrito = []

  constructor(private readonly _orderHttp : OrderHttpService,
    private readonly _orderProductHtpp : OrderProductHttpService,
    private readonly _warehouseProductHttp : WarehouseProductHttpService) { }

  costoTotal = [{
    'carrito': this.detalleCarrito,
    'precioTotal': 0
  }] 

  insertarAlCarrito(producto){
    var indiceItem = -1
    const existeEnElCarrito = this.detalleCarrito.some((item,indice)=>{
      if(item.producto == producto){
        indiceItem = indice
        return true
      }else{
        return false
      }
    })
    if(existeEnElCarrito){
      this.aumentarContador(indiceItem)
    }else{
      this.agregarAlCarrito(producto)
    }
    this.calcularTotal()
    return this.detalleCarrito
  }

  private aumentarContador(indice){
    this.detalleCarrito[indice].cantidad ++
  }

  private agregarAlCarrito(producto){
    var toInsert = {
      'producto': producto,
      'cantidad': 1
    }
    this.detalleCarrito.push(toInsert)
  }

  quitarCarrito(producto){
    var indiceItem = -1
    var cantidad = 0 
    this.detalleCarrito.forEach((item,indice)=>{
      if(item.producto == producto){
        indiceItem = indice
        cantidad = item.cantidad
      }
    })
    if(cantidad == 1){
      this.eliminarDelCarrito(indiceItem)
    }else{
      this.reducirCantidad(indiceItem)
    }
    this.calcularTotal()
    return this.detalleCarrito
  }

  private eliminarDelCarrito(indice){
    this.detalleCarrito.splice(indice,1)
  }

  private reducirCantidad(indice){
    this.detalleCarrito[indice].cantidad --
  }

  private calcularTotal(){
    var costo = 0
    this.detalleCarrito.forEach((item)=>{
      costo += (item.cantidad * item.producto.precio)
    })
    this.costoTotal[0].precioTotal = Math.round(costo * 100) / 100
  }

  private generateDetail() : string{
    var detail = ''
    this.detalleCarrito.forEach(item =>{
      detail = `${detail} ${item.producto.name} x${item.cantidad}\n`
    })
    return detail
  }

  async finalizarCompra(cliente : Order){
    var venta : Order =
      {
        'fecha':cliente.fecha,
        'precioTotal': this.costoTotal[0].precioTotal,
        'bodega_FK' : cliente.bodega,
        'finalizado' : cliente.finalizado
      }
    var success = await this._orderHttp.crear(venta).toPromise()
    cliente.productos.forEach(async desc=>{
      var detail = {
        'cantidad' : desc.cantidad,
        'pedido_FK' : success.id,
        'producto_FK' : desc.producto.id
      }
      await this._orderProductHtpp.crear(detail).toPromise()
      var inWarehouse = await this._warehouseProductHttp.customGet(`/BodegaProducto?producto_FK=${desc.producto.id}&bodega_FK=${cliente.bodega}`).toPromise()
      if(inWarehouse.length == 0){
        console.log('vacío')
        var toUpdate = {
          'stock': desc.cantidad,
          'producto_FK': desc.producto.id,
          'bodega_FK' : cliente.bodega
        }
        await this._warehouseProductHttp.crear(toUpdate).toPromise()
      }else{
        inWarehouse.forEach(async (stored) => {
          var toUpdate = {
            'stock': stored.stock + desc.cantidad
          }
          await this._warehouseProductHttp.actualizar(stored.id, toUpdate).toPromise()
        })
      }
    })
    this.detalleCarrito = []
    this.costoTotal = [{
      'carrito': this.detalleCarrito,
      'precioTotal': 0
    }] 
  }
}
