import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navabar',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navabar.html',
  styleUrl: './navabar.css',
})
export class Navabar {

}
