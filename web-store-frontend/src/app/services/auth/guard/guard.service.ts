import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoggedInService } from '../logged-in/logged-in.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  canActivate(route : ActivatedRouteSnapshot,
    state : RouterStateSnapshot) : boolean{
      if(this._loggedIn.isLoggedIn){
        return true
      }else{
        this._router.navigate(['/login'])
        return false
      }
    }

  constructor(private readonly _loggedIn : LoggedInService,
    private readonly _router : Router) { 

    }
}
