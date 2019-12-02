import { Component, OnInit, Input } from '@angular/core';
import { card } from './card.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: card[];
  public addCard: card[] = [];
  public num;
  constructor(private data: DataService) {
  }

  ngOnInit() {
    console.log(card)
    this.data.currentMessage.subscribe(num => this.num = num);
  }
  add(addedCard) {
    let order = addedCard;
    this.addCard.push(order);
    localStorage.setItem('cardItems', JSON.stringify(this.addCard));
    let orders=(JSON.parse(localStorage.getItem('cardItems')))
    this.data.changeMessage(orders.length)
  }

}
