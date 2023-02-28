import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { 
    path: 'admin/dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'admin/categorie',
    loadChildren: () =>
      import('./categorie/categorie.module').then((m) => m.CategorieModule),
  },
  {
    path: 'admin/livre',
    loadChildren: () =>
      import('./livre/livre.module').then((m) => m.LivreModule),
  },
  {
    path: 'admin/user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
