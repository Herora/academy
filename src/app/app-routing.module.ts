import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CanDeactivateGuard } from 'src/app/shareds/form-validate/can-deactivate.guard';

const routes: Routes = [
  {
    path: 'account',
    loadChildren: () => import('./views/account/account.module').then(mod => mod.AccountModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./views/dashboard/dashboard.module').then(mod => mod.DashboardModule),
    // canDeactivate:[CanDeactivateGuard],
  },
  { path: '**', redirectTo: '/account/initial' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
