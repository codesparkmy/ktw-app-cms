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
        path: 'event-detail/:id',
        loadChildren: () =>
          import('./event-detail/event-detail.module').then(
            (m) => m.EventDetailPageModule
          ),
      },
      {
        path: 'check-in',
        loadChildren: () =>
          import('./check-in/check-in.module').then((m) => m.CheckInPageModule),
      },
      {
        path: 'calendar',
        loadChildren: () =>
          import('./calendar/calendar.module').then(
            (m) => m.CalendarPageModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./profile/profile.module').then((m) => m.ProfilePageModule),
      },
      {
        path: 'chat',
        loadChildren: () =>
          import('./chat/chat.module').then((m) => m.ChatPageModule),
      },
      {
        path: 'chat-message/:id',
        loadChildren: () =>
          import('./chat-message/chat-message.module').then(
            (m) => m.ChatMessagePageModule
          ),
      },
      {
        path: 'leave',
        loadChildren: () =>
          import('./leave/leave.module').then((m) => m.LeavePageModule),
      },
      {
        path: 'apply-leave',
        loadChildren: () =>
          import('./apply-leave/apply-leave.module').then(
            (m) => m.ApplyLeavePageModule
          ),
      },
      {
        path: 'apply-leave/:id',
        loadChildren: () =>
          import('./apply-leave/apply-leave.module').then(
            (m) => m.ApplyLeavePageModule
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
