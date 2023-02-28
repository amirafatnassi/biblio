import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { CategorieComponent } from './categorie.component';
import { EditCategorieComponent } from './edit-categorie/edit-categorie.component';
import { ShowCategorieComponent } from './show-categorie/show-categorie.component';

const routes: Routes = [
  { path: '', component: CategorieComponent },
  { path: 'add', component: AddCategorieComponent },
  { path: 'show/:id', component: ShowCategorieComponent },
  { path: 'update/:id', component: EditCategorieComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategorieRoutingModule {}
