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
      useFactory: (pubSubService) => {
        return new AuthApiService('/api/auth', pubSubService);
      },
      deps: [PubSubService],
    },
    {
      provide: LeaveApiService,
      useFactory: (pubSubService) => {
        return new LeaveApiService('/api/leaves', pubSubService);
      },
      deps: [PubSubService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
