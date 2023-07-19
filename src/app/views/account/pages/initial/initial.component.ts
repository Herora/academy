import { Component, OnInit } from '@angular/core';
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
  }
}
