import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { RoomComponent } from './room/room.component';
import { RoomTypeComponent } from './room-type/room-type.component';
import { GuestComponent } from './guest/guest.component';
import { LoginComponent } from './login/login.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { BookingComponent } from './booking/booking.component';
import { AddRoomComponent } from './room/add-room/add-room.component';
import { EditRoomComponent } from './room/edit-room/edit-room.component';
import { ShowUsersInRoleComponent } from './role/show-users-in-role/show-users-in-role.component';
import { AddUserToRoleComponent } from './role/add-user-to-role/add-user-to-role.component';
import { RemoveUserFromRoleComponent } from './role/remove-user-from-role/remove-user-from-role.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import {AuthenticatonInterceptor} from './authenticaton.interceptor'
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  Routes,
} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddRoomTypeComponent } from './room-type/add-room-type/add-room-type.component';
import { EditRoomTypeComponent } from './room-type/edit-room-type/edit-room-type.component';
import { AddGuestComponent } from './guest/add-guest/add-guest.component';
import { EditGuestComponent } from './guest/edit-guest/edit-guest.component';
import { AddBookingComponent } from './booking/add-booking/add-booking.component';
import { DeleteConfirmComponent } from './delete-confirm/delete-confirm.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { EditPasswordComponent } from './user/edit-password/edit-password.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { DeleteUserComponent } from './user/delete-user/delete-user.component';
import { ConfirmationComponent } from './booking/confirmation/confirmation.component';
import { MarkAsPaidComponent } from './invoice/mark-as-paid/mark-as-paid.component';

import { CalendarComponent } from './calendar/calendar.component';
import { EditBookingComponent } from './booking/edit-booking/edit-booking.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { Error401Component } from './error401/error401.component';
import { Error403Component } from './error403/error403.component';
import { Error404Component } from './error404/error404.component';
import { Error400Component } from './error400/error400.component';
import { ErrorHandlingInterceptor } from './error-handling.interceptor';
import { Error500Component } from './error500/error500.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent,  },
  { path: '400', component: Error400Component,  },
  { path: '401', component: Error401Component,  },
  { path: '403', component: Error403Component,  },
  { path: '404', component: Error404Component,  },
  { path: '500', component: Error500Component,  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'calendar', component: CalendarComponent },
      { path: 'rooms', component: RoomComponent },
      { path: 'roomTypes', component: RoomTypeComponent },
      { path: 'guests', component: GuestComponent },
      {
        path: 'bookings',
        component: BookingComponent,
        children: [
          {
            path: 'addRoom',
            component: AddRoomComponent,
          },
        ],
      },
      { path: 'invoices', component: InvoiceComponent },
      { path: 'users', component: UserComponent },
      {
        path: 'roles',
        component: RoleComponent,
        children: [
          {
            path: 'addUserToRole/:id',
            component: AddUserToRoleComponent,
          },
          {
            path: 'rmoveUserFromRole/:id',
            component: RemoveUserFromRoleComponent,
          },
          {
            path: 'usersInRole/:id',
            component: ShowUsersInRoleComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RoleComponent,
    RoomComponent,
    RoomTypeComponent,
    GuestComponent,
    LoginComponent,
    InvoiceComponent,
    BookingComponent,
    AddRoomComponent,
    EditRoomComponent,
    ShowUsersInRoleComponent,
    AddUserToRoleComponent,
    RemoveUserFromRoleComponent,
    SideBarComponent,
    HomeComponent,
    AddRoomTypeComponent,
    EditRoomTypeComponent,
    AddGuestComponent,
    EditGuestComponent,
    AddBookingComponent,
    DeleteConfirmComponent,
    AddUserComponent,
    EditPasswordComponent,
    EditUserComponent,
    DeleteUserComponent,
    ConfirmationComponent,
    MarkAsPaidComponent,
    CalendarComponent,
    EditBookingComponent,
    WelcomeComponent,
    Error401Component,
    Error403Component,
    Error404Component,
    Error400Component,
    Error500Component,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ], //adding packages
  providers: [provideHttpClient(),{provide: HTTP_INTERCEPTORS, useClass: AuthenticatonInterceptor, multi: true},{ provide: HTTP_INTERCEPTORS, useClass: ErrorHandlingInterceptor, multi: true }], //inject
  bootstrap: [AppComponent],
})
export class AppModule {}
