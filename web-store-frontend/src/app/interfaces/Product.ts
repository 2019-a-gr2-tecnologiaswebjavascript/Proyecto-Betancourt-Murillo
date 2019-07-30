import { Order } from './Order';
import { Warehouse } from './Warehouse';

export interface Product{
    createdAt?: number
    updatedAt?: number
    id?: number
    nombre : string
    precio : number
    pedidos? : any[]
    bodegas? : any[]
    distribuidor : string
}