import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from 'src/app/services/session/session.service';

@Component({
  selector: 'app-route-sales-details',
  templateUrl: './route-sales-details.component.html',
  styleUrls: ['./route-sales-details.component.css']
})
export class RouteSalesDetailsComponent implements OnInit {


  index
  nombre
  apellido
  ci
  direccion
  correo
  total
  details
  sale

  constructor(private readonly _activatedRoute : ActivatedRoute,
    private readonly _session : SessionService) { }

  ngOnInit() {
    var param$ = this._activatedRoute.queryParams
    param$.subscribe(
      (parametros) =>{
        this.index = parametros.id
      }
    )
    this.sale = this._session.sales[this.index]
    this.details = this._session.sales[this.index].productos
    console.log(this.details)
    this.nombre = this._session.sales[this.index].nombre
    this.apellido = this._session.sales[this.index].apellido
    this.ci = this._session.sales[this.index].ci
    this.direccion = this._session.sales[this.index].direccion
    this.correo = this._session.sales[this.index].correo
    this.total = this._session.sales[this.index].total

  }

}
