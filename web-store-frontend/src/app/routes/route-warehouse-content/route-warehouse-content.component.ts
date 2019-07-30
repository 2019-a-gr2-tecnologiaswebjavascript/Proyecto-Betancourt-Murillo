import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from 'src/app/services/session/session.service';

@Component({
  selector: 'app-route-warehouse-content',
  templateUrl: './route-warehouse-content.component.html',
  styleUrls: ['./route-warehouse-content.component.css']
})
export class RouteWarehouseContentComponent implements OnInit {

  products = []
  productsAux = []
  index

  constructor(private readonly _activatedRoute : ActivatedRoute,
    private readonly _session : SessionService) { }

  ngOnInit() {
    var param$ = this._activatedRoute.queryParams
    param$.subscribe(
      (parametros) =>{
        this.index = parametros.id
      }
    )
    this.products = this._session.warehouses[this.index].productos
    this.productsAux = this.products
    var input = <HTMLInputElement>document.getElementById("myInput");
    input.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) {
        if(input.value != ''){
          this.products = this.products.filter(item => {
            return item.producto.nombre.includes(input.value)
          })
        }else{
          this.products = this.productsAux
        }
      }
    });
  }

}
