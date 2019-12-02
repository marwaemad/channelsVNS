import { Component, OnInit } from '@angular/core';
import product from '../../assets/json/Products.json';
import { card } from '../shared/card/card.model.js';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public products: card[];
  constructor() {
    this.products= product as [];
  }

  ngOnInit() {

  }

}
