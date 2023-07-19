import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'academy';
  public modeTheme : String | null = window.localStorage.getItem('data-theme');
  ngOnInit(): void {
    if(this.modeTheme === null){
      window.localStorage.setItem('data-theme', 'light');
    }
  }
}
