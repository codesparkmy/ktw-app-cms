import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageKeys } from '../storage-keys';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class PubSubService {
  public menuStateSubject = new BehaviorSubject<{
    isClosing: boolean;
    isNav: boolean;
  }>(null);
  public token: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public avatar: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private storageService: StorageService) {
    this.storageService.get(StorageKeys.TOKEN).then((res) => {
      this.token.next(res);
    });

    this.storageService.get(StorageKeys.AVATAR).then((res) => {
      this.avatar.next(res);
    });
  }
}
