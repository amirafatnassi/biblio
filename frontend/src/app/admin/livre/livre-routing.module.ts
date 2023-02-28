import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLivreComponent } from './add-livre/add-livre.component';
import { EditLivreComponent } from './edit-livre/edit-livre.component';
import { LivreComponent } from './livre.component';
import { ShowLivreComponent } from './show-livre/show-livre.component';

const routes: Routes = [
  { path: '', component: LivreComponent },
  { path: 'add', component: AddLivreComponent },
  { path: 'show/:id', component: ShowLivreComponent },
  { path: 'update/:id', component: EditLivreComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivreRoutingModule {}
