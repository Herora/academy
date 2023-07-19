import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit{
  public modeTheme : String | null = window.localStorage.getItem('data-theme');
  thememode(data : String){
    this.modeTheme = data;
  }
  ngOnInit(): void {
  }
  
}
