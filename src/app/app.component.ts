import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    // Check for '/signup' in the URL and redirect if needed
    if (this.router.url === '/signup') {
      this.router.navigate(['/signup']); // Replace '/new-page' with the desired destination
    }
  }
}