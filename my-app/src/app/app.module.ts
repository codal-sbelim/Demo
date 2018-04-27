import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './routerConfig';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemUsersService } from './in-memory-data.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import { SimpleNotificationsModule } from 'angular2-notifications';

import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

import { UserService } from './users.service';
import { AddEditComponent } from './add-edit/add-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    ListComponent,
    DetailComponent,
    AddEditComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, // For Template-driven forms
    ReactiveFormsModule, // For Reactive forms
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemUsersService, { dataEncapsulation: false }
    ),
    Angular2FontawesomeModule,
    SimpleNotificationsModule.forRoot({ position: ['top', 'right'] })
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
