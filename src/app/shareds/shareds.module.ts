import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NavSibarComponent } from './nav-sibar/nav-sibar.component';
import { ConfigModeThemeComponent } from './config-mode-theme/config-mode-theme.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CarruselComponent } from './carrusel/carrusel.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    NavSibarComponent,
    ConfigModeThemeComponent,
    FooterComponent,
    CarruselComponent
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
    FooterComponent,
    CarruselComponent
  ]
})
export class SharedsModule { }
