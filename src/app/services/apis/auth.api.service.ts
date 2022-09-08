import { Inject, Injectable } from '@angular/core';
import { PubSubService } from '../internal/pub-sub.service';
import { BaseApiService, HELPER_TYPE } from './base.api.service';

@Injectable()
export class AuthApiService extends BaseApiService {
  constructor(
    @Inject(HELPER_TYPE) subUrl: string,
    private pubSubService: PubSubService
  ) {
    super(subUrl, pubSubService);
  }

  login(username: string, password: string) {
    return this.axiosInstance.post('login', {
      email: username,
      password,
      type: 'user',
    });
  }
}
