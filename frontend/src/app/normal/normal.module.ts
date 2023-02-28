import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NormalRoutingModule } from './normal-routing.module';
import { NormalComponent } from './normal.component';
import { ShowComponent } from './show/show.component';
import { DashboardModule } from './dashboard/dashboard.module';


@NgModule({
  declarations: [
    NormalComponent,
    ShowComponent,
  ],
  imports: [
    CommonModule,
    NormalRoutingModule,
    DashboardModule
  ]
})
export class NormalModule { }
