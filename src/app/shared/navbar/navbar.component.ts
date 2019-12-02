import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public num = JSON.parse(localStorage.getItem('cardItems')).length;
  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.data.currentMessage.subscribe(num => this.num = num)
  }

}
