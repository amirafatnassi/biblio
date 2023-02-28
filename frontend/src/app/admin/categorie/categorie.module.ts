import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CategorieRoutingModule } from './categorie-routing.module';
import { CategorieComponent } from './categorie.component';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { EditCategorieComponent } from './edit-categorie/edit-categorie.component';
import { ShowCategorieComponent } from './show-categorie/show-categorie.component';
import { DashboardModule } from '../dashboard/dashboard.module';

@NgModule({
  declarations: [
    CategorieComponent,
    AddCategorieComponent,
    EditCategorieComponent,
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
