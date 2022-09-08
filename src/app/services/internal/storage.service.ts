import { Injectable } from '@angular/core';
import { StorageKeys } from '../storage-keys';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {}

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public async set(key: StorageKeys, value: any) {
    await this.init();
    return this._storage?.set(key, value);
  }

  public async get(key: StorageKeys) {
    await this.init();
    return this._storage.get(key);
  }

  public async clear() {
    await this.init();
    this._storage.clear();
  }
}
