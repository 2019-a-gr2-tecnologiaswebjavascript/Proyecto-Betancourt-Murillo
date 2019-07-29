import { Component, OnInit } from '@angular/core';
import { UserHttpService } from 'src/app/services/http/user-http/user-http.service';
import { PersonHttpService } from 'src/app/services/http/person-http/person-http.service';
import { UserRolService } from 'src/app/services/http/user-rol-http/user-rol.service';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';

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
  roles = []
  usuario : User

  constructor(private readonly _userHttp : UserHttpService,
    private readonly _personHttp : PersonHttpService,
    private readonly _userRol : UserRolService,
    private readonly _router : Router) { }


  ngOnInit() {

  }

  async nuevoUsuario(){
    var usuarioId = 0
    const newUser$ = await this._userHttp
      .crear({
        userName : this.nombreUsuario,
        password : this.pass
      })
      .toPromise()
    this.usuario = newUser$
    return newUser$.id
  }

  async nuevaPersona(usuarioId : number){
    var personaId = 0
    const newPerson$ = await this._personHttp
      .crear({
        primerNombre : this.primerNombre,
        segundoNombre : this.segundoNombre,
        primerApellido : this.primerApellido,
        segundoApellido : this.segundoApellido,
        cedula : this.cedula,
        telefono : this.telefono,
        correo : this.correo,
        persona_usuario_FK : usuarioId
      })
      .toPromise()
    return newPerson$.id 
  }

  async asignarRoles(usuarioId){
    this.roles.forEach(async element => {
      const rol$ = await this._userRol.crear(
        {
          rol_FK: element,
          usuario_FK: usuarioId
        }
      ).toPromise()
      console.log(rol$)
    });
  }

  async actualizarUsuario(usuarioId, personaId){
    const peticion$ = await this._userHttp.actualizar(
      usuarioId,
      {
        userName : this.usuario.userName,
        user_person_FK : personaId
      }
    ).toPromise()
    return true
  }

  async save(){
    var usuarioId = await this.nuevoUsuario()
    var personaId = await this.nuevaPersona(usuarioId)
    await this.asignarRoles(usuarioId)
    var condicion = await this.actualizarUsuario(usuarioId, personaId)
    if(condicion){
      await this._router.navigate(['/homeAdmin'])
    }
  }

}
