import { Warehouse } from './Warehouse';

export interface Sale {
    createdAt?: number
    updatedAt?: number
    id?: number
    nombre : string
    apellido : string
    ci : string
    correo: string
    direccion : string
    productos : any[]
    bodega : number | Warehouse | any
    fecha : string
    total : number
    finalizado : boolean
}