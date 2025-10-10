import { Component } from '@angular/core';
import 'tailwindcss';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  template: `<!-- Education -->
    <section class="">
      <div class="wrapper flex flex-col md:flex-row min-w-0 gap-6">
        <div class="w-full md:w-1/2 justify-center items-center">
          <h3 class="w-full py-3 text-2xl bg-[var(--bg)] text-[var(--primary)]">
            &lt;!&ndash; Education &ndash;&gt;
          </h3>
          <img src="/assets/undraw_deep-work_muov.svg" alt="deep work" />
        </div>

        <!-- Right side -->
        <div
          class="w-full md:w-1/2 flex flex-col items-center justify-center space-y-6 px-4"
        >
          <!-- Education Card 1 -->
          <div
            class=" card-wrapper w-full max-w-md bg-[var(--bg)] border-b-2 shadow-lg rounded-lg p-6"
          >
            <h3 class="text-xl font-semibold text-[var(--secondary)] mb-2">
              Full-Stack Web Development, BS
            </h3>
            <p class="text-[var(--text)]">Bellevue University, Bellevue, NE</p>
          </div>

          <!-- Education Card 2 -->
          <div
            class=" card-wrapper w-full max-w-md bg-[var(--bg)] shadow-lg rounded-lg p-6"
          >
            <h3 class="text-xl font-semibold text-[var(--secondary)] mb-2">
              Web Development, AAS
            </h3>
            <p class="text-[var(--text)]">
              Des Moines Area Community College, Ankeny, IA
            </p>
          </div>
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
