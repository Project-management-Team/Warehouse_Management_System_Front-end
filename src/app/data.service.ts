import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  // tslint:disable-next-line:typedef
  changeMessage(message: string) {
    this.messageSource.next(message);
  }
}
