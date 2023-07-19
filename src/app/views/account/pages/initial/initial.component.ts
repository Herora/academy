import { Component, OnInit } from '@angular/core';
import {
  Carousel,
  initTE,
} from "tw-elements"
@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.scss']
})
export class InitialComponent implements OnInit{
  public modeTheme : String | null = window.localStorage.getItem('data-theme');
  thememode(data : String){
    this.modeTheme = data;
  }
  ngOnInit(): void {
    initTE({ Carousel })
  }
  public dataRouters = [
    {name : 'Inicio',url:'/account/initial'},
    {name : 'login',url:'/account/login'},
    {name : 'registro',url:'/account/register'}
  ]
}
