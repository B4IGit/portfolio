import { Component } from '@angular/core';
import 'tailwindcss';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  template: `<!-- Education -->
    <section
      class="grid relative gap-12 md:grid-cols-2 md:items-center md:gap-6 md:py-8"
    >
      <div>
        <h3 class="w-full py-3 text-2xl bg-[var(--bg)] text-[var(--primary)]">
          &lt;!&ndash; Education &ndash;&gt;
        </h3>
        <img
          src="/portfolio/assets/undraw_deep-work_muov.svg"
          alt="deep work"
        />
      </div>

      <!-- Right side -->
      <div class="space-y-6 md:space-y-8">
        <!-- Education Card 1 -->
        <div
          class="grid grid-rows-[auto,1fr,auto] mb-12 py-4 card-wrapper w-full max-w-md bg-[var(--bg)] shadow-lg rounded-lg p-6 text-center md:text-left"
        >
          <p class="text-[var(--primary)] pb-4 md:text-left">2025 - 2026</p>
          <h3 class="text-xl font-semibold pb-2 text-[var(--secondary)]">
            Full-Stack Web Development, BS
          </h3>
          <p class="text-[var(--text)]">Bellevue University, Bellevue, NE</p>
        </div>

        <!-- Education Card 2 -->
        <div
          class="grid grid-rows-[auto,1fr,auto] py-4 card-wrapper w-full max-w-md bg-[var(--bg)] shadow-lg rounded-lg p-6 text-center md:text-left"
        >
          <p class="text-[var(--primary)] pb-4 md:text-left">2023 - 2025</p>
          <h3 class="text-xl font-semibold pb-2 text-[var(--secondary)]">
            Web Development, AAS
          </h3>
          <p class="text-[var(--text)]">
            Des Moines Area Community College, Ankeny, IA
          </p>
        </div>
      </div>
    </section>`,
  styles: `
    .card-wrapper {
      border: 4px solid transparent;
      border-radius: 1rem;
      background:
        var(--bg-dark) padding-box,
        var(--border-gradient) border-box;
    }
  `,
})
export class EducationComponent {}
