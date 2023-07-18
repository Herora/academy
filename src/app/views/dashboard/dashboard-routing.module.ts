import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { MainLayoutComponent } from 'src/app/layouts/main-layout/main-layout.component';
// import { AuthGuard } from 'src/app/core/guards/auth-guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    // component: MainLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(mod => mod.HomeModule),
        // canActivate: [AuthGuard],
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
