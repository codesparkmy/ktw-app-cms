import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PubSubService {

  public menuStateSubject = new BehaviorSubject<boolean>(false);
  
  constructor() { }
}
