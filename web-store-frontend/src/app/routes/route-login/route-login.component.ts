import { Component, OnInit } from '@angular/core';
import { LoggedInService } from 'src/app/services/auth/logged-in/logged-in.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-login',
  templateUrl: './route-login.component.html',
  styleUrls: ['./route-login.component.css']
})
export class RouteLoginComponent implements OnInit {

  userName : string = ''
  password : string = ''

  constructor(private readonly _loggedIn : LoggedInService,
    private readonly _router : Router) { }

  ngOnInit() {
  }

  login(){
    const aux = this._loggedIn.login(this.userName, this.password)
    console.log(aux)
  }

}
