import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GridTrailBackgroundComponent } from './grid-trail-background/grid-trail-background.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    CommonModule,
    GridTrailBackgroundComponent,
  ],
  template: ` <div
    class="container max-w-[1200px] mx-auto px-4 relative overflow-hidden w-full"
  >
    <!-- P5.js canvas -->
    <app-grid-trail-background
      class="absolute inset-0 z-[-1] overflow-hidden"
    ></app-grid-trail-background>

    <main class="z-1">
      <nav
        class="fixed top-0 left-0 w-full z-50 flex items-center justify-between h-20 px-2 bg-[var(--bg)] shadow-md"
      >
        <div
          class="logo uppercase text-2xl font-semibold text-[var(--secondary)] cursor-pointer"
        >
          <a routerLink="/">Devin Ledesma</a>
        </div>

        <!-- Mobile Toggle Button -->
        <button
          (click)="toggleNavBar()"
          class="md:hidden text-3xl text-white p-2 cursor-pointer z-[1000]"
        >
          {{ isMenuOpen ? '✕' : '☰' }}
        </button>

        <!-- Sidebar -->
        <div
          [class.translate-x-0]="isMenuOpen"
          [class.translate-x-full]="!isMenuOpen"
          class="sidebar-nav fixed top-0 right-0 h-screen w-[80%] bg-[var(--bg)] z-[999] md:hidden transition-transform duration-300 ease-in-out"
        >
          <div class="flex justify-end p-4">
            <button
              (click)="toggleNavBar()"
              class="text-3xl text-white cursor-pointer"
            ></button>
          </div>
          <ul
            class="w-full text-center flex-col list-image-none p-2 text-[var(--text)]"
          >
            <li><a routerLink="/about" (click)="toggleNavBar()">About</a></li>
            <li>
              <a routerLink="/projects" (click)="toggleNavBar()">Projects</a>
            </li>
            <li><a routerLink="/resume" (click)="toggleNavBar()">Resume</a></li>
            <li>
              <a routerLink="/fake-link" (click)="toggleNavBar()">Contact?</a>
            </li>
          </ul>
        </div>

        <!-- Overlay -->
        <div
          *ngIf="isMenuOpen"
          (click)="toggleNavBar()"
          class="fixed inset-0 bg-[var(--bg)] bg-opacity-50 z-[998] md:hidden"
        ></div>

        <!-- Main menu -->
        <div class="hidden md:block">
          <ul class="flex list-image-none gap-10 text-[var(--text)]">
            <li><a routerLink="/about">About</a></li>
            <li><a routerLink="/projects">Projects</a></li>
            <li><a routerLink="/resume">Resume</a></li>
            <li><a routerLink="/contact">Contact?</a></li>
          </ul>
        </div>
      </nav>

      <section class="min-h-screen pt-20">
        <router-outlet />
      </section>
    </main>

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
  </div>`,
  styles: [
    `
      /* Sidebar */
      nav .sidebar-nav li {
        padding: 1em 0;
        border-bottom: 2px solid var(--primary);
        width: 100%;
      }
      /* Sidebar-nav links */
      nav .sidebar-nav a {
        display: block;
        font-size: 1.25rem;
      }
    `,
  ],
})
export class AppComponent {
  title = 'portfolio';

  isMenuOpen = false;

  toggleNavBar() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
