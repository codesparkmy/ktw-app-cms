import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorizedPage } from './authorized.page';

const routes: Routes = [
  {
    path: '',
    component: AuthorizedPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'events',
        loadChildren: () =>
          import('./events/events.module').then((m) => m.EventsPageModule),
      },
      {
        path: 'event-detail',
        loadChildren: () =>
          import('./event-detail/event-detail.module').then(
            (m) => m.EventDetailPageModule
          ),
      },
      {
        path: 'calendar',
        loadChildren: () =>
          import('./calendar/calendar.module').then(
            (m) => m.CalendarPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorizedPageRoutingModule {}
