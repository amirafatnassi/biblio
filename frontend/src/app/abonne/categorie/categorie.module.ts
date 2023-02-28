import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CategorieRoutingModule } from './categorie-routing.module';
import { CategorieComponent } from './categorie.component';
import { ShowCategorieComponent } from './show-categorie/show-categorie.component';
import { DashboardModule } from '../dashboard/dashboard.module';

@NgModule({
  declarations: [
    CategorieComponent,
    ShowCategorieComponent,
  ],
  imports: [
    CommonModule,
    CategorieRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardModule
  ],
})
export class CategorieModule {}
