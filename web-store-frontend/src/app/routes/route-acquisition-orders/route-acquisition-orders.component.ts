import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session/session.service';

@Component({
  selector: 'app-route-acquisition-orders',
  templateUrl: './route-acquisition-orders.component.html',
  styleUrls: ['./route-acquisition-orders.component.css']
})
export class RouteAcquisitionOrdersComponent implements OnInit {

  orders = []
  ordersAux =[]

  constructor(private readonly _session : SessionService) { }

  ngOnInit() {
    this.orders = this._session.orders
    this.ordersAux = this.orders
    var input = <HTMLInputElement>document.getElementById("myInput");
    input.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) {
        if(input.value != ''){
          this.orders = this.ordersAux.filter(item => {
            return item.id == input.value
          })
        }else{
          this.orders = this.ordersAux
        }
      }
    });
  }

}
