import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ShowUserComponent } from './show-user/show-user.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: "",
    children: [
      { path: "", component: UserComponent },
      { path: "add", component: AddUserComponent },
      { path: "update/:id", component: EditUserComponent },
      { path: "show/:id", component: ShowUserComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
