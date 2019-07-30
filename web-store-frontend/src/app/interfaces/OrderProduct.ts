import { Order } from './Order';

export interface OrderProduct{
    createdAt?: number
    updatedAt?: number
    id?: number
    cantidad : number
    pedido_FK : number | Order | any
    producto_FK : number | any
}