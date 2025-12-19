import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Layout } from "./shared/LayoutComponent/layout/layout";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Layout],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('student-dashboard');
}
