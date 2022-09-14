import { Inject, Injectable } from '@angular/core';
import { PubSubService } from '../internal/pub-sub.service';
import { StorageService } from '../internal/storage.service';
import { BaseApiService, HELPER_TYPE } from './base.api.service';

@Injectable()
export class LeaveApiService extends BaseApiService {
  constructor(
    @Inject(HELPER_TYPE) subUrl: string,
    pubSubService: PubSubService,
    storageService: StorageService
  ) {
    super(subUrl, pubSubService, storageService);
  }

  async cancelLeave(id: any) {
    await this.init();
    return await this.axiosInstance.delete('delete/' + id);
  }

  async getOne(id) {
    await this.init();
    return await this.axiosInstance.get('one/' + id);
  }
  
  async getSummaries() {
    await this.init();
    return this.axiosInstance.get('self/summary');
  }

  async checkBody(data) {
    await this.init();
    return await this.axiosInstance.post('check-days', data);
  }

  async getLeaves() {
    await this.init();
    return this.axiosInstance.get('self/leaves');
  }

  async applyLeave(data) {
    await this.init();
    return await this.axiosInstance.post('apply-leave', data);
  }
}
