import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/services/session/session.service';
import { UserHttpService } from 'src/app/services/http/user-http/user-http.service';
import { PersonHttpService } from 'src/app/services/http/person-http/person-http.service';
import { UserRolService } from 'src/app/services/http/user-rol-http/user-rol.service';

@Component({
  selector: 'app-route-edit-user-admin',
  templateUrl: './route-edit-user-admin.component.html',
  styleUrls: ['./route-edit-user-admin.component.css']
})
export class RouteEditUserAdminComponent implements OnInit {

  primerNombre
  segundoNombre
  primerApellido
  segundoApellido
  cedula
  telefono
  correo
  nombreUsuario
  pass
  roles = []
  index
  client

  constructor(private readonly _activatedRoute : ActivatedRoute,
    private readonly _session : SessionService,
    private readonly _userHttp : UserHttpService,
    private readonly _personHttp : PersonHttpService,
    private readonly _router : Router) { }

  ngOnInit() {
    var param$ = this._activatedRoute.queryParams
    param$.subscribe(
      (parametros) =>{
        this.index = parametros.id
      }
    )
    this.client = this._session.clients[this.index]
    this.primerNombre = this.client.primerNombre
    this.segundoNombre = this.client.segundoApellido
    this.primerApellido = this.client.primerApellido
    this.segundoApellido = this.client.segundoApellido
    this.cedula = this.client.cedula
    this.telefono = this.client.telefono
    this.correo = this.client.correo
    this.nombreUsuario = this.client.usuario.userName
    this.roles = this.client.roles
  }

  async nuevoUsuario(){
    const newUser$ = await this._userHttp
      .actualizar(this.client.usuario.id,{
        userName : this.nombreUsuario,
        password : this.pass
      })
      .toPromise()
    return newUser$.id
  }

  async nuevaPersona(){
    const newPerson$ = await this._personHttp
      .actualizar(this.client.id, {
        primerNombre : this.primerNombre,
        segundoNombre : this.segundoNombre,
        primerApellido : this.primerApellido,
        segundoApellido : this.segundoApellido,
        cedula : this.cedula,
        telefono : this.telefono,
        correo : this.correo
      })
      .toPromise()
    return newPerson$.id 
  }


  async save(){
    try{
      var usuarioId = await this.nuevoUsuario()
      var personaId = await this.nuevaPersona()
      this._session.initialize()
      this._router.navigate(['/homeAdmin'])
    }catch(error){
      console.log(error)
    }
  }

}
