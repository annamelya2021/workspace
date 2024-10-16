
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';

const routes: Routes = [
  {
path: 'auth',
//guards
loadChildren: ()=> import('./auth/auth.module').then(m =>AuthModule)
},
{
  path: 'dashboard',
  //guards
  loadChildren: ()=> import('./dashboard/dashboard.module').then(m =>DashboardModule)
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
