import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

    private cardNum = new BehaviorSubject('0');
    currentMessage = this.cardNum.asObservable();
    constructor() {
     }

    changeMessage(message: string) {
        this.cardNum.next(message)
    }

}