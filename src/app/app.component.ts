import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { GridTrailBackgroundComponent } from './grid-trail-background/grid-trail-background.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, GridTrailBackgroundComponent],
  template: `
    <div class="container border-box mx-auto z-[-2]] relative overflow-hidden">
      <!-- p5 canvas (z -1) -->
      <app-grid-trail-background class="z-[-1]"></app-grid-trail-background>

      <header></header>

      <main class="w-full p-2 md:w-4/5 mx-auto">
        <nav class="flex justify-between h-20 items-center bg-[var(--bg)]">
          <!-- Logo -->
          <div class="nav-logo uppercase text-2xl font-semibold p-2 list-none">
            <li><a routerLink="/">Devin Ledesma</a></li>
          </div>
          <!-- Nav links -->
          <div class="nav-links flex list-none gap-6 px-6 py-2">
            <li><a routerLink="/about">About</a></li>
            <li><a routerLink="#">Projects</a></li>
            <li><a routerLink="#">Resume</a></li>
            <li><a routerLink="#">Contact?</a></li>
          </div>
        </nav>

        <section class="content">
          <router-outlet />
        </section>

        <footer
          class="flex flex-col items-center justify-center h-28 bg-[var(--bg)]"
        >
          <nav class="flex gap-6 mb-5">
            <a routerLink="/">Home</a>
            <a routerLink="/about">About</a>
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
