import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbonneRoutingModule } from './abonne-routing.module';
import { AbonneComponent } from './abonne.component';
import { ShowComponent } from './show/show.component';
import { DashboardModule } from './dashboard/dashboard.module';


@NgModule({
  declarations: [
    AbonneComponent,
    ShowComponent
  ],
  imports: [
    CommonModule,
    AbonneRoutingModule,
    DashboardModule
  ]
})
export class AbonneModule { }
