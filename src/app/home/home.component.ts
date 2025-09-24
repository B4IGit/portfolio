import 'tailwindcss';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <section class="hero flex min-w-0 border-2 p-6 border-red-700">
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
        <div class="code-container mx-auto border-1 w-4/5">
          <div class="code-navbar">
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
  styles: ``,
})
export class HomeComponent {}
