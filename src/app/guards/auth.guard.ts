import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { StorageService } from '../services/internal/storage.service';
import { StorageKeys } from '../services/storage-keys';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private storageService: StorageService,
    private navCtrl: NavController
  ) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (await this.storageService.get(StorageKeys.TOKEN)) {
      return true;
    }
    this.navCtrl.navigateRoot('/login');
    return false;
  }
}
