import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  product

  @Input()
  stock

  url

  constructor() { }

  ngOnInit() {
    this.url = `${environment.url}/picture?id=${this.product.id}`
  }

  

}
