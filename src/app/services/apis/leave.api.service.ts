import { Inject, Injectable } from '@angular/core';
import { PubSubService } from '../internal/pub-sub.service';
import { BaseApiService, HELPER_TYPE } from './base.api.service';

@Injectable()
export class LeaveApiService extends BaseApiService {
  constructor(
    @Inject(HELPER_TYPE) subUrl: string,
    private pubSubService: PubSubService
  ) {
    super(subUrl, pubSubService);
  }

  getSummaries() {
    return this.axiosInstance.get('summary/self');
  }
}
