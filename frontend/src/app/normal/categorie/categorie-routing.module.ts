import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorieComponent } from './categorie.component';
import { ShowCategorieComponent } from './show-categorie/show-categorie.component';

const routes: Routes = [
  { path: '', component: CategorieComponent },
  { path: 'show/:id', component: ShowCategorieComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategorieRoutingModule {}
