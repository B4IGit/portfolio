import 'tailwindcss';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <section class="hero flex min-w-0 p-6">
      <!-- Left: 50% -->
      <div class=" w-1/2 p-6">
        <h1 class="text-4xl font-bold">
          Hello, <br />
          I am <span class="text-[var(--primary)]">Devin Ledesma</span>, I'm a
          Professional <span class="text-[var(--tertiary)]">Full-Stack</span>
          <span class="text-[var(--secondary)]"> Web Developer</span>.
        </h1>
      </div>
      <!-- Right: 50% -->
      <div class="w-1/2">
        <div class="code-container mx-auto w-4/5 bg-[var(--bg)] rounded">
          <div class="code-navbar border-b-2 p-3 flex gap-1.5">
            <div class="w-3 h-3 rounded-full bg-[var(--primary)]"></div>
            <div class="w-3 h-3 rounded-full bg-[var(--secondary)]"></div>
            <div class="w-3 h-3 rounded-full bg-[var(--tertiary)]"></div>
          </div>
          <div class="code-content border-box">
            <pre ngNonBindable>
                  <code>
                  const currentStudent = &#123;
                    name: 'Devin Ledesma',
                    skills: ['Angular', 'HTML5', 'Tailwind', 'Node.js', 'Express', 'MongoDB'],
                  &#125;
                </code>
                </pre>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .code-container {
      border: 4px solid transparent;
      border-radius: 1rem;
      background:
        var(--bg-dark) padding-box,
        var(--border-gradient) border-box;
    }
  `,
})
export class HomeComponent {}
