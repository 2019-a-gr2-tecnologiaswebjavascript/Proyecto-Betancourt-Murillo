import { Warehouse } from './Warehouse';

export interface WarehouseProduct{
    createdAt?: number
    updatedAt?: number
    id?: number
    stock : number
    producto_FK? : number | any
    bodega_FK? : number | Warehouse | any
}