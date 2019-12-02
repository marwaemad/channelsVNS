import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-orders-details',
  templateUrl: './orders-details.component.html',
  styleUrls: ['./orders-details.component.css'],
  providers: [DataService]
})
export class OrdersDetailsComponent implements OnInit {
  public orderId: string = '';
  constructor(private router: Router, public dataService: DataService) {
    this.orderId = this.router.url.split('/')[this.router.url.split('/').length - 1];
  }

  ngOnInit() {
    console.log(JSON.stringify(localStorage.getItem('orders')))
  }

}
