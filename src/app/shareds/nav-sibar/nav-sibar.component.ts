import { Component, OnInit } from '@angular/core';
import {
  Sidenav,
  initTE,
} from "tw-elements";

@Component({
  selector: 'app-nav-sibar',
  templateUrl: './nav-sibar.component.html',
  styleUrls: ['./nav-sibar.component.scss']
})
export class NavSibarComponent implements OnInit {
  ngOnInit(): void {
    initTE({ Sidenav });
    
  }
}
