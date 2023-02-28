import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivreRoutingModule } from './livre-routing.module';
import { LivreComponent } from './livre.component';
import { AddLivreComponent } from './add-livre/add-livre.component';
import { EditLivreComponent } from './edit-livre/edit-livre.component';
import { ShowLivreComponent } from './show-livre/show-livre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardModule } from '../dashboard/dashboard.module';

@NgModule({
  declarations: [
    LivreComponent,
    AddLivreComponent,
    EditLivreComponent,
    ShowLivreComponent,
  ],
  imports: [
    CommonModule,
    LivreRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardModule,
  ],
})
export class LivreModule {}
