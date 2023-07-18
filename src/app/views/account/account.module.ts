import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { InitialComponent } from './pages/initial/initial.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    InitialComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    // ApiService
  ]
})
export class AccountModule { }