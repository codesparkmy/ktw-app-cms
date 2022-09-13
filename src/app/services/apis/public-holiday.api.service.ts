import { Inject, Injectable } from '@angular/core';
import { PubSubService } from '../internal/pub-sub.service';
import { StorageService } from '../internal/storage.service';
import { BaseApiService, HELPER_TYPE } from './base.api.service';

@Injectable()
export class PublicHolidayApiService extends BaseApiService {
  constructor(
    @Inject(HELPER_TYPE) subUrl: string,
    pubSubService: PubSubService,
    storageService: StorageService
  ) {
    super(subUrl, pubSubService, storageService);
  }

  async getByMonthAndYear(month, year) {
    await this.init();
    return await this.axiosInstance.get('by-month/' + year + '/' + month);
  }
}
