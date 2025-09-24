import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BackgroundP5Component } from './grid-trail-background/grid-trail-background.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, BackgroundP5Component],
  template: `
    <div class="container mx-auto fixed inset-0 z-[-2] bg-[var(--bg)]">
      <!-- p5 canvas (z -1) -->
      <app-grid-trail-background></app-grid-trail-background>

      <header></header>

      <main class="w-4/5 mx-auto">
        <nav class="flex justify-between h-20 items-center bg-[var(--bg)]">
          <!-- Logo -->
          <div class="nav-logo uppercase text-2xl font-semibold p-2 list-none">
            <li><a routerLink="/">Devin Ledesma</a></li>
          </div>
          <!-- Nav links -->
          <div class="nav-links flex list-none gap-6 px-6 py-2">
            <li><a routerLink="#">About</a></li>
            <li><a routerLink="#">Projects</a></li>
            <li><a routerLink="#">Resume</a></li>
            <li><a routerLink="#">Contact?</a></li>
          </div>
        </nav>

        <section class="content">
          <router-outlet />
        </section>

        <footer class="flex flex-col items-center bg-[var(--bg)]">
          <nav class="flex gap-6">
            <a routerLink="/">Home</a>
            <a routerLink="#">About</a>
            <a routerLink="#">Projects</a>
            <a routerLink="#">Resume</a>
            <a routerLink="#">Contact?</a>
          </nav>
          <p>&copy; 2025 Portfolio</p>
        </footer>
      </main>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  title = 'portfolio';
}
