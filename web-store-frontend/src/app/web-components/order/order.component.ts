import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @Input()
  sale

  @Input()
  index

  constructor(private readonly _router : Router) { }

  ngOnInit() {
  }

  seeDetail(){
    var parametros = {
      queryParams:{
        'id': this.index
      }
    }
    this._router.navigate(['/homeAdmin','salesDetail'],parametros)
  }

}
