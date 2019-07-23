import { Rol } from './Rol';
import { User } from './User';

export interface UsuarioRol {
    createdAt?: number
    updatedAt?: number
    id?: number
    rol_FK : number | Rol | any
    usuario_FK : number | User | any
}