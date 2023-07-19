import { Component, OnInit } from '@angular/core';
import {  Tab, Ripple , Input, initTE} from "tw-elements";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  public modeTheme : String | null = window.localStorage.getItem('data-theme');
  ngOnInit(): void { 
    initTE({ Tab, Ripple, Input });
  }
  public dataRouters = [
    {name : 'Inicio',url:'/account/initial'},
    {name : 'login',url:'/account/login'},
    {name : 'registro',url:'/account/register'}
  ]
  thememode(data : String){
    this.modeTheme = data;
  }
}
