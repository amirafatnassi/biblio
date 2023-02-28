import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from './guard/role.guard';

import { AdminModule } from './admin/admin.module';
import { NormalModule } from './normal/normal.module';
import { AbonneModule } from './abonne/abonne.module';
import { WelcomeModule } from './welcome/welcome.module';

const routes: Routes = [
  
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./welcome/welcome.module').then((m) => m.WelcomeModule),
  },
  {
    path: 'admin',
    canActivate: [RoleGuard],
    data: { allowedRole: 'Admin' },
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'normal',
    canActivate: [RoleGuard],
    data: { allowedRole: 'Normal' },
    loadChildren: () =>
      import('./normal/normal.module').then((m) => m.NormalModule),
  },
  {
    path: 'abonne',
    canActivate: [RoleGuard],
    data: { allowedRole: 'Abonne' },
    loadChildren: () =>
      import('./abonne/abonne.module').then((m) => m.AbonneModule),
  },

  { path: '**', redirectTo: 'welcome' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AdminModule,
    NormalModule,
    AbonneModule,
    WelcomeModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
