import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="container mx-auto">
      <header></header>

      <main class="w-4/5 mx-auto border-2 border-solid-black">
        <nav class="flex justify-between border-2 border-red-700">
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

        <footer class="flex flex-col items-center">
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
