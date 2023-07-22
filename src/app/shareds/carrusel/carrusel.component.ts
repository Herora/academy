import { Component, OnInit } from '@angular/core';
import {
  Carousel,
  initTE,
} from "tw-elements"
@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})
export class CarruselComponent implements OnInit {
  ngOnInit(): void {
    initTE({ Carousel })
  }
}
