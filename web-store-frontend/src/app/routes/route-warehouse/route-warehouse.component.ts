import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session/session.service';

@Component({
  selector: 'app-route-warehouse',
  templateUrl: './route-warehouse.component.html',
  styleUrls: ['./route-warehouse.component.css']
})
export class RouteWarehouseComponent implements OnInit {

  warehouses = []
  warehouseAux = []

  constructor(private readonly _session : SessionService) { }

  ngOnInit() {
    this.warehouses = this._session.warehouses
    this.warehouseAux = this.warehouses
    var input = <HTMLInputElement>document.getElementById("myInput");
    input.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) {
        if(input.value != ''){
          this.warehouses = this.warehouses.filter(item => {
            return item.id == input.value
          })
        }else{
          this.warehouses = this.warehouseAux
        }
      }
    });
  }

}
