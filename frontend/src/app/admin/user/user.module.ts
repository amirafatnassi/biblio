import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ShowUserComponent } from './show-user/show-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DataTablesModule } from "angular-datatables";
import { AddUserComponent } from './add-user/add-user.component';
import { DashboardModule } from '../dashboard/dashboard.module';


@NgModule({
  declarations: [
    UserComponent,
    ShowUserComponent,
    EditUserComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardModule
  ]
})
export class UserModule { }
