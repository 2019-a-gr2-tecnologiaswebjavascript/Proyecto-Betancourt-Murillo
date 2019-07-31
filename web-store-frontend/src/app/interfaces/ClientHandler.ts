import { User } from './User';

export interface ClientHandler{
    createdAt?: number
    updatedAt?: number
    id?: number
    primerNombre : string
    segundoNombre? : string
    primerApellido? : string
    segundoApellido? : string
    cedula? : string
    telefono? : string
    correo? : string
    usuario? : number | User | any
    roles? : any[]
}