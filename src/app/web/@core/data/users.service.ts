import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

let counter = 0;

@Injectable()
export class UserService {

  private users = {
    nick: { name: 'Nick Jones', picture: 'assets/images/examples/nick.png' },
    eva: { name: 'Eva Moor', picture: 'assets/images/examples/eva.png' },
    jack: { name: 'Jack Williams', picture: 'assets/images/examples/jack.png' },
    lee: { name: 'Lee Wong', picture: 'assets/images/examples/lee.png' },
    alan: { name: 'Alan Thompson', picture: 'assets/images/examples/alan.png' },
    kate: { name: 'Kate Martinez', picture: 'assets/images/examples/kate.png' },
  };

  private userArray: any[];

  constructor() {
    // this.userArray = Object.values(this.users);
  }

  getUsers(): Observable<any> {
    return Observable.of(this.users);
  }

  getUserArray(): Observable<any[]> {
    return Observable.of(this.userArray);
  }

  getUser(): Observable<any> {
    counter = (counter + 1) % this.userArray.length;
    return Observable.of(this.userArray[counter]);
  }
}
