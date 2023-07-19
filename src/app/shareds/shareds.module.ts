import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NavSibarComponent } from './nav-sibar/nav-sibar.component';
import { ConfigModeThemeComponent } from './config-mode-theme/config-mode-theme.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MainLayoutComponent,
    NavSibarComponent,
    ConfigModeThemeComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    MainLayoutComponent,
    NavSibarComponent,
    ConfigModeThemeComponent,
    FooterComponent
  ]
})
export class SharedsModule { }
