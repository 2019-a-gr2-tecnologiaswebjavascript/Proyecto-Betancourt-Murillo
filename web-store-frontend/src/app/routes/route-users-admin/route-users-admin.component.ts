import { Component, OnInit } from '@angular/core';
import { ClientHandler } from 'src/app/interfaces/ClientHandler';
import { SessionService } from 'src/app/services/session/session.service';

@Component({
  selector: 'app-route-users-admin',
  templateUrl: './route-users-admin.component.html',
  styleUrls: ['./route-users-admin.component.css']
})
export class RouteUsersAdminComponent implements OnInit {

  clientes = []
  clientesAux = []

  constructor(private readonly _session : SessionService) { }

  ngOnInit() {
    this.clientes = this._session.clients
    this.clientesAux = this.clientes
    var input = <HTMLInputElement>document.getElementById("myInput");
    input.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) {
        if(input.value != ''){
          this.clientes = this.clientes.filter(item => {
            return item.usuario.userName.toLowerCase().includes(input.value)
          })
        }else{
          this.clientes = this.clientesAux
        }
      }
    });
  }

}
