import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { AuthApiService } from '../services/apis/auth.api.service';
import { PubSubService } from '../services/internal/pub-sub.service';
import { StorageService } from '../services/internal/storage.service';
import { StorageKeys } from '../services/storage-keys';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = {
    email: '',
    password: '',
  };

  constructor(
    private storageService: StorageService,
    private authApiService: AuthApiService,
    private toastController: ToastController,
    private pubSubService: PubSubService,
    private navController: NavController
  ) {}

  ngOnInit(): void {}

  // ngOnInit() {}

  async login() {
    try {
      var loggedIn = await this.authApiService.login(
        this.user.email,
        this.user.password
      );
      await this.storageService.set(StorageKeys.TOKEN, loggedIn.data.token);
      this.pubSubService.token.next(loggedIn.data.token);
      this.navController.navigateRoot('/members/home');
    } catch (ex) {
      var errToast = await this.toastController.create({
        message: ex.response.data.message,
        color: 'danger',
        duration: 3000,
      });
      errToast.present();
    } finally {
    }
  }
}
