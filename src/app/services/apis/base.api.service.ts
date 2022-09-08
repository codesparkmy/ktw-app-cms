import { Inject, Injectable, InjectionToken } from '@angular/core';
import axios, { AxiosInstance } from 'axios';
import { environment } from 'src/environments/environment';
import { PubSubService } from '../internal/pub-sub.service';

export const HELPER_TYPE = new InjectionToken<string>('');
@Injectable()
export class BaseApiService {
  protected axiosInstance: AxiosInstance;
  constructor(
    @Inject(HELPER_TYPE) private subUrl: string,
    pubSubService: PubSubService
  ) {
    this.subUrl = subUrl;
    pubSubService.token.subscribe((x) => {
      if (x) {
        this.axiosInstance = axios.create({
          baseURL: environment.api_url + this.subUrl,
          headers: {
            Authorization: 'Bearer ' + x,
          },
        });
      } else {
        this.axiosInstance = axios.create({
          baseURL: environment.api_url + this.subUrl,
        });
      }
    });
  }
}
