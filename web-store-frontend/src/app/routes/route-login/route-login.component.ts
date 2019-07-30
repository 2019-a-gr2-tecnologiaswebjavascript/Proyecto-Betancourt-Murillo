import { Component, OnInit } from '@angular/core';
import { LoggedInService } from 'src/app/services/auth/logged-in/logged-in.service';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session/session.service';

@Component({
  selector: 'app-route-login',
  templateUrl: './route-login.component.html',
  styleUrls: ['./route-login.component.css']
})
export class RouteLoginComponent implements OnInit {

  userName : string = ''
  password : string = ''

  constructor(private readonly _loggedIn : LoggedInService,
    private readonly _router : Router,
    private readonly _session : SessionService) { }

  ngOnInit() {
    this._session.initialize()
  }

  async login(){
    const aux = await this._loggedIn.login(this.userName, this.password)
    if(aux){
      this._router.navigate(['/homeAdmin'])
    }else{
      alert('Credenciales incorrectas')
    }
  }

}
