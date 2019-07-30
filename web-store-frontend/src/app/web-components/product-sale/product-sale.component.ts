import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-sale',
  templateUrl: './product-sale.component.html',
  styleUrls: ['./product-sale.component.css']
})
export class ProductSaleComponent implements OnInit {

  @Input()
  cantidad

  @Input()
  producto

  @Input()
  bodega

  url

  constructor() { }

  ngOnInit() {
    this.url = `${environment.url}/picture?id=${this.producto.id}`
  }

}
