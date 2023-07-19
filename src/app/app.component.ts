import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'academy';
  ngOnInit(): void {
    window.localStorage.setItem('data-theme', 'light');
  }
}
