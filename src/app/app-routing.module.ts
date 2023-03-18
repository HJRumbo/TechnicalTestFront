import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetUsersComponent } from './users/get-users/get-users.component';

const routes: Routes = [
  {
    path: '',
    component: GetUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
