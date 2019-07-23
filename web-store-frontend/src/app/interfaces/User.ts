import { Person } from './Person';

export interface User {
    createdAt?: number
    updatedAt?: number
    id?: number
    userName : string
    password? : string
    user_person_FK? : number | Person | any
    user_roles? : any[]

}