import { Inject, Injectable } from '@angular/core';
import { PubSubService } from '../internal/pub-sub.service';
import { StorageService } from '../internal/storage.service';
import { BaseApiService, HELPER_TYPE } from './base.api.service';

@Injectable()
export class EventApiService extends BaseApiService {
  constructor(
    @Inject(HELPER_TYPE) subUrl: string,
    pubSubService: PubSubService,
    storageService: StorageService
  ) {
    super(subUrl, pubSubService, storageService);
  }

  async getEventsByOutlet(outlet) {
    await this.init();
    return await this.axiosInstance.get('by-outlet/' + outlet);
  }

  async getEventById(eventId) {
    await this.init();
    return await this.axiosInstance.get('by-id/' + eventId);
  }

  async getEventByMonth(outlet, month, year) {
    await this.init();
    return await this.axiosInstance.post('by-month/' + outlet, {
      month,
      year,
    });
  }
}
