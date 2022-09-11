import { Inject, Injectable } from '@angular/core';
import { PubSubService } from '../internal/pub-sub.service';
import { StorageService } from '../internal/storage.service';
import { BaseApiService, HELPER_TYPE } from './base.api.service';

@Injectable()
export class EventImageApiService extends BaseApiService {
  constructor(
    @Inject(HELPER_TYPE) subUrl: string,
    pubSubService: PubSubService,
    storageService: StorageService
  ) {
    super(subUrl, pubSubService, storageService);
  }

  async getEventImagesByEventId(eventId) {
    await this.init();
    return await this.axiosInstance.get('by-event/' + eventId);
  }
}
