import { Component, OnInit } from '@angular/core';
import { SaleHttpService } from 'src/app/services/http/sale-http/sale-http.service';
import { SessionService } from 'src/app/services/session/session.service';

@Component({
  selector: 'app-route-sales',
  templateUrl: './route-sales.component.html',
  styleUrls: ['./route-sales.component.css']
})
export class RouteSalesComponent implements OnInit {

  sales

  constructor(private readonly _session : SessionService) { }

  ngOnInit() {
    this.sales = this._session.sales
  }

}
