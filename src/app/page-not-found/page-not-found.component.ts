import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [RouterLink],
  template: ` <div class="text-center py-20">
    <h1 class="text-5xl font-bold text-[var(--primary)]">404</h1>
    <h3 class="text-xl mt-4">Oops! Page not found.</h3>
    <p>This is for demonstration purposes :)</p>
    <a
      routerLink="/resume"
      class="text-[var(--secondary)] underline mt-6 inline-block"
      >Go to Resume</a
    >
  </div>`,
  styles: ``,
})
export class PageNotFoundComponent {}
