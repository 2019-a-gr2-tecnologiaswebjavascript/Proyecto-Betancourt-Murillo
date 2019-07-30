import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  @Input()
  order
  @Input()
  index

  constructor(private readonly _router : Router) { }

  ngOnInit() {
  }

  seeDetails(){
    var parametros = {
      queryParams:{
        'id': this.index
      }
    }
    this._router.navigate(['/homeAdmin','acqOrdersDetail'],parametros)
  }

}
