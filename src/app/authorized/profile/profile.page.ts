import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ProfileApiService } from 'src/app/services/apis/profile.api.service';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profile = null;
  profileEdit = null;
  isEditing = false;
  baseApiUrl = environment.api_url;
  constructor(
    private profileApiService: ProfileApiService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.getProfile();
  }

  async save() {
    try {
      await this.profileApiService.update(
        this.profileEdit.name,
        this.profileEdit.phoneNumber
      );
      this.isEditing = false;
    } catch (ex) {
      var toast = await this.toastController.create({
        message: 'Unable to save profile',
        duration: 3000,
        color: 'danger',
      });
      toast.present();
    }
  }

  edit() {
    this.isEditing = true;
  }

  getPicture() {
    Camera.getPhoto({
      height: 300,
      width: 300,
      allowEditing: true,
      resultType: CameraResultType.Base64,
    }).then((res) => {
      this.profileApiService
        .uploadAvatar(res.base64String, res.format)
        .then((uploaded) => {
          this.getProfile();
        });
    });
  }

  getProfile() {
    this.profileApiService.getSelf().then((res) => {
      this.profile = res.data;
      this.profileEdit = this.profile;
    });
  }
}
