import { Warehouse } from './Warehouse';

export interface Order{
    createdAt?: number
    updatedAt?: number
    id?: number
    fecha? : string
    precioTotal? : number
    finalizado? : boolean
    productos? : any[]
    bodega? : number | Warehouse | any
    bodega_FK? : number 
}