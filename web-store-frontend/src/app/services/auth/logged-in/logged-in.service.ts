import { Injectable } from '@angular/core';
import { UserHttpService } from '../../http/user-http/user-http.service';
import { User } from 'src/app/interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class LoggedInService {

  isLoggedIn = false
  user : User = null

  constructor(private readonly _userHttp : UserHttpService) { }

  login(userName : string, password : string) : boolean{
    
    var credential = {
      userName : userName,
      password : password
    }

    var login$ = this._userHttp.customPost('/login',credential)

    login$.subscribe(
      (nuevoUsuario)=>{
        this.user = nuevoUsuario
        this.isLoggedIn = true
      },
      (error) => {
        console.log(error)
        this.isLoggedIn = false
      }
    )

    return this.isLoggedIn
  }

}
