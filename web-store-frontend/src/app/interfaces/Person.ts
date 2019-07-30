import { User } from './User';

export interface Person {
    createdAt?: number
    updatedAt?: number
    id?: number
    primerNombre : string
    segundoNombre? : string
    primerApellido : string
    segundoApellido? : string
    cedula : string
    telefono : string
    correo : string
    persona_usuario_FK? : number | User | any
}