import { Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: ListComponent },
  { path: 'register', component: RegistrationFormComponent },
  { path: 'detail/:id', component: DetailComponent }
];
