import { Inject, Injectable, InjectionToken } from '@angular/core';
import axios, { AxiosInstance } from 'axios';
import { environment } from 'src/environments/environment';
import { PubSubService } from '../internal/pub-sub.service';
import { StorageService } from '../internal/storage.service';
import { StorageKeys } from '../storage-keys';

export const HELPER_TYPE = new InjectionToken<string>('');
@Injectable()
export class BaseApiService {
  protected axiosInstance: AxiosInstance;
  constructor(
    @Inject(HELPER_TYPE) private subUrl: string,
    private pubSubService: PubSubService,
    private storageService: StorageService
  ) {
    this.subUrl = subUrl;
  }

  async init() {
    var token = await this.storageService.get(StorageKeys.TOKEN);
    if (token) {
      this.axiosInstance = axios.create({
        baseURL: environment.api_url + this.subUrl,
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
    } else {
      this.axiosInstance = axios.create({
        baseURL: environment.api_url + this.subUrl,
      });
    }
  }
}
