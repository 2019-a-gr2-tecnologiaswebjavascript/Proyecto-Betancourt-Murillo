import { Component, OnInit } from '@angular/core';
import { WarehouseHttpService } from 'src/app/services/http/warehouse-http/warehouse-http.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { SessionService } from 'src/app/services/session/session.service';

@Component({
  selector: 'app-route-new-warehouse',
  templateUrl: './route-new-warehouse.component.html',
  styleUrls: ['./route-new-warehouse.component.css']
})
export class RouteNewWarehouseComponent implements OnInit {

  direccion

  constructor(private readonly _warehouseHttp : WarehouseHttpService,
    private readonly _location : Location,
    private readonly _session : SessionService) { }

  ngOnInit() {
  }

  async save(){
    await this._warehouseHttp.crear({direccion : this.direccion}).toPromise()
    this._session.initialize()
    this._location.back()
  }

}
