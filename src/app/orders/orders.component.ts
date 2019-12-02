import { Component, OnInit } from '@angular/core';
import Product from '../../assets/json/Products.json';
import Orders from '../../assets/json/Orders.json';
import { card } from '../shared/card/card.model.js';
import { order } from './orders.model.js';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  public products: card[];
  public orders: order[] = [];
  public orderWithPrice = [];
  // public orderPrice;
  constructor() {
    this.products = Product as [];
    this.orders = Orders as [];

  }

  ngOnInit() {
    let price = 0;
    this.orders.map(order => {
      if (order.Products) {
        order.Products.forEach(item => {
          let pro = this.products.find(product => {
            return item.ProductId === product.ProductId;
          })

          price +=(item.Quantity * pro.ProductPrice);
        })
      }
      order.OrderPrice = price;
      this.orderWithPrice.push(order);
    })
  }

}
