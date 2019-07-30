import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {

  @Input()
  warehouse

  @Input()
  index
  
  constructor(private readonly _router:Router) { }

  ngOnInit() {
  }

  seeContent(){
    var parametros = {
      queryParams:{
        'id': this.index
      }
    }
    this._router.navigate(['/homeAdmin','warehouseContent'], parametros)
  }

}
