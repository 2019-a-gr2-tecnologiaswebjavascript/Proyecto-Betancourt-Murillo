import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session/session.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-acquisition-order-details',
  templateUrl: './route-acquisition-order-details.component.html',
  styleUrls: ['./route-acquisition-order-details.component.css']
})
export class RouteAcquisitionOrderDetailsComponent implements OnInit {

  details = []

  index

  bodega

  total

  constructor(private readonly _session : SessionService,
    private readonly _activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    var param$ = this._activatedRoute.queryParams
    param$.subscribe(
      (parametros) =>{
        this.index = parametros.id
      }
    )
    this.details = this._session.orders[this.index].productos
    this.bodega = this._session.orders[this.index].bodega.id
    this.total = this._session.orders[this.index].precioTotal
  }

}
