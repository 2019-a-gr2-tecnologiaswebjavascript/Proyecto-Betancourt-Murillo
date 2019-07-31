import { Component, OnInit } from '@angular/core';
import { UserHttpService } from 'src/app/services/http/user-http/user-http.service';
import { PersonHttpService } from 'src/app/services/http/person-http/person-http.service';
import { UserRolService } from 'src/app/services/http/user-rol-http/user-rol.service';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { SessionService } from 'src/app/services/session/session.service';

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
    private readonly _router : Router,
    private readonly _session : SessionService) { }


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
      this._session.initialize()
      await this._router.navigate(['/homeAdmin'])
    }
  }

  validarCedula(cedula:string)
  {
    if(cedula != null)
    if(cedula.length == 10){
        
      //Obtenemos el digito de la region que sonlos dos primeros digitos
      var digito_region = Number(cedula.substring(0,2));
      
      //Pregunto si la region existe ecuador se divide en 24 regiones
      if( digito_region >= 1 && digito_region <=24 ){
        
        // Extraigo el ultimo digito
        var ultimo_digito   = Number(cedula.substring(9,10));

        //Agrupo todos los pares y los sumo
        var pares = parseInt(cedula.substring(1,2)) + parseInt(cedula.substring(3,4)) + parseInt(cedula.substring(5,6)) + parseInt(cedula.substring(7,8));

        //Agrupo los impares, los multiplico por un factor de 2, si la resultante es > que 9 le restamos el 9 a la resultante
        var numero1 = Number(cedula.substring(0,1));
         numero1 = (numero1 * 2);
        if( numero1 > 9 ){ var numero1 = (numero1 - 9); }

        var numero3 = Number(cedula.substring(2,3));
        var numero3 = (numero3 * 2);
        if( numero3 > 9 ){ var numero3 = (numero3 - 9); }

        var numero5 = Number (cedula.substring(4,5));
        var numero5 = (numero5 * 2);
        if( numero5 > 9 ){ var numero5 = (numero5 - 9); }

        var numero7 = Number(cedula.substring(6,7));
        var numero7 = (numero7 * 2);
        if( numero7 > 9 ){ var numero7 = (numero7 - 9); }

        var numero9 = Number(cedula.substring(8,9));
        var numero9 = (numero9 * 2);
        if( numero9 > 9 ){ var numero9 = (numero9 - 9); }

        var impares = numero1 + numero3 + numero5 + numero7 + numero9;

        //Suma total
        var suma_total = (pares + impares);

        //extraemos el primero digito
        var primer_digito_suma = String(suma_total).substring(0,1);

        //Obtenemos la decena inmediata
        var decena = (parseInt(primer_digito_suma) + 1)  * 10;

        //Obtenemos la resta de la decena inmediata - la suma_total esto nos da el digito validador
        var digito_validador = decena - suma_total;

        //Si el digito validador es = a 10 toma el valor de 0
        if(digito_validador == 10)
          var digito_validador = 0;

        //Validamos que el digito validador sea igual al de la cedula
        if(digito_validador == ultimo_digito){
          console.log('la cedula:' + cedula + ' es correcta');
          return true;
        }else{
          console.log('la cedula:' + cedula + ' es incorrecta');
          return false;
        }
        
      }else{
        // imprimimos en consola si la region no pertenece
        console.log('Esta cedula no pertenece a ninguna region');
        return false;
      }
   }else{
      //imprimimos en consola si la cedula tiene mas o menos de 10 digitos
      console.log('Esta cedula tiene menos de 10 Digitos');
      return false;
   }    

}

}
