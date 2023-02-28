import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NormalComponent } from './normal.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
  { path: 'livre', component: NormalComponent },
  { path: 'livre/show/:id', component: ShowComponent },
  {
    path: 'categorie',
    loadChildren: () =>
      import('./categorie/categorie.module').then((m) => m.CategorieModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NormalRoutingModule {}
