import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-new-users-admin',
  templateUrl: './route-new-users-admin.component.html',
  styleUrls: ['./route-new-users-admin.component.css']
})
export class RouteNewUsersAdminComponent implements OnInit {

  primerNombre
  segundoNombre
  primerApellido
  segundoApellido
  cedula
  telefono
  correo
  nombreUsuario
  pass
  roles
  constructor() { }


  ngOnInit() {

  }

  save(){
    const nuevaPersona = {
      primerNombre : this.primerNombre,
      segundoNombre : this.segundoNombre,
      primerApellido : this.primerApellido,
      segundoApellido : this.segundoApellido,
      cedula : this.cedula,
      telefono : this.telefono,
      correo : this.correo,
      persona_usuario_FK : {
        userName : this.nombreUsuario,
        password : this.pass
      },
      roles : this.roles
    }
    console.log(nuevaPersona)
  }

}
