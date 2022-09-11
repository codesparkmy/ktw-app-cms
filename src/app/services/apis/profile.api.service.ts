import { Inject, Injectable } from '@angular/core';
import { PubSubService } from '../internal/pub-sub.service';
import { StorageService } from '../internal/storage.service';
import { BaseApiService, HELPER_TYPE } from './base.api.service';

@Injectable()
export class ProfileApiService extends BaseApiService {
  constructor(
    @Inject(HELPER_TYPE) subUrl: string,
    pubSubService: PubSubService,
    storageService: StorageService
  ) {
    super(subUrl, pubSubService, storageService);
  }

  async getAll() {
    await this.init();
    return await this.axiosInstance.get('all');
  }

  async getSelf() {
    await this.init();
    return await this.axiosInstance.get('self');
  }

  async update(name: any, phoneNumber: any) {
    await this.init();
    return await this.axiosInstance.put('update', {
      name,
      phoneNumber,
      id: (await this.storageService.decodeToken()).sub,
    });
  }

  async uploadAvatar(base64String, format) {
    await this.init();
    const rawData = atob(base64String);
    const bytes = new Array(rawData.length);
    for (let x = 0; x < rawData.length; x++) {
      bytes[x] = rawData.charCodeAt(x);
    }
    const arr = new Uint8Array(bytes);

    const blob = new Blob([arr], { type: 'image/' + format });

    var fd = new FormData();
    fd.append('avatar', blob, 'image.' + format);

    return await this.axiosInstance.post('upload-avatar', fd);
  }
}
