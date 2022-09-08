import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PubSubService {
  public menuStateSubject = new BehaviorSubject<{
    isClosing: boolean;
    isNav: boolean;
  }>(null);
  public token = new BehaviorSubject<string>(null);

  constructor() {}
}
