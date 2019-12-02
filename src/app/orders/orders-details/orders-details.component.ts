import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';
import users from '../../../assets/json/Users.json';

@Component({
  selector: 'app-orders-details',
  templateUrl: './orders-details.component.html',
  styleUrls: ['./orders-details.component.scss'],
  providers: [DataService]
})
export class OrdersDetailsComponent implements OnInit {
  public orderId: string = '';
  public orders;
  public user;
  public currentOrder = [];
  constructor(private router: Router, public dataService: DataService) {
    this.orderId = this.router.url.split('/')[this.router.url.split('/').length - 1];
  }

  ngOnInit() {
    this.orders =  JSON.parse(localStorage.getItem('orders'));
    this.orders= this.orders.find(order => {
      return order.OrderId === +this.orderId;
    })
    this.user = users.find(user => {
      return user.Id === this.orders.UserId;
    })
  }

}
