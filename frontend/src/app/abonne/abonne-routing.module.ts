import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbonneComponent } from './abonne.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
  { path: 'livre', component: AbonneComponent },
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
export class AbonneRoutingModule {}
