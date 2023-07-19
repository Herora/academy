import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-config-mode-theme',
  templateUrl: './config-mode-theme.component.html',
  styleUrls: ['./config-mode-theme.component.scss']
})
export class ConfigModeThemeComponent implements OnInit {
  @Output() public response = new EventEmitter<any>();
  ngOnInit(): void {
    
  }

  public dataTheme = window.localStorage.getItem('data-theme');
  public changeTheme(modo : String) {
    window.localStorage.setItem('data-theme', String(modo));
    this.dataTheme =  window.localStorage.getItem('data-theme');
    this.response.emit(this.dataTheme);
  }
}
