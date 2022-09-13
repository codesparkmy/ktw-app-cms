import { Inject, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { AuthApiService } from './services/apis/auth.api.service';
import { PubSubService } from './services/internal/pub-sub.service';
import { BaseApiService } from './services/apis/base.api.service';
import { LeaveApiService } from './services/apis/leave.api.service';
import { StorageService } from './services/internal/storage.service';
import { EventApiService } from './services/apis/event.api.service';
import { OutletsApiService } from './services/apis/outlets.api.service';
import { MinuteToTimePipe } from './pipes/minute-to-time.pipe';
import { EventImageApiService } from './services/apis/event-image.api.service';
import { ProfileApiService } from './services/apis/profile.api.service';
import { PublicHolidayApiService } from './services/apis/public-holiday.api.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: AuthApiService,
      useFactory: (pubSubService, storageService) => {
        return new AuthApiService('/api/auth', pubSubService, storageService);
      },
      deps: [PubSubService, StorageService],
    },
    {
      provide: LeaveApiService,
      useFactory: (pubSubService, storageService) => {
        return new LeaveApiService(
          '/api/leaves',
          pubSubService,
          storageService
        );
      },
      deps: [PubSubService, StorageService],
    },
    {
      provide: EventApiService,
      useFactory: (pubSubService, storageService) => {
        return new EventApiService(
          '/api/events',
          pubSubService,
          storageService
        );
      },
      deps: [PubSubService, StorageService],
    },
    {
      provide: OutletsApiService,
      useFactory: (pubSubService, storageService) => {
        return new OutletsApiService(
          '/api/outlets',
          pubSubService,
          storageService
        );
      },
      deps: [PubSubService, StorageService],
    },
    {
      provide: EventImageApiService,
      useFactory: (pubSubService, storageService) => {
        return new EventImageApiService(
          '/api/event-images',
          pubSubService,
          storageService
        );
      },
      deps: [PubSubService, StorageService],
    },
    {
      provide: ProfileApiService,
      useFactory: (pubSubService, storageService) => {
        return new ProfileApiService(
          '/api/users',
          pubSubService,
          storageService
        );
      },
      deps: [PubSubService, StorageService],
    },
    {
      provide: PublicHolidayApiService,
      useFactory: (pubSubService, storageService) => {
        return new PublicHolidayApiService(
          '/api/public-holidays',
          pubSubService,
          storageService
        );
      },
      deps: [PubSubService, StorageService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
