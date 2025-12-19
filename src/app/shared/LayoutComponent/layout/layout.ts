import { Component } from '@angular/core';
import { Navabar } from "../../NavbarComponent/navabar/navabar";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [Navabar, RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

}
