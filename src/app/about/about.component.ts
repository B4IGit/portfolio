import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: ` <section class="flex items-center min-h-screen">
    <div class="w-full p-2">
      <!-- Full-width heading -->
      <h3 class="w-full py-3 text-2xl bg-[var(--bg)] text-[var(--primary)]">
        About Me
      </h3>

      <!-- Flex container for content -->
      <div class="md:flex md:gap-6">
        <!-- Text section -->
        <div class="bg-[var(--bg)] md:basis-1/2 text-lg p-3">
          <p>
            I'm a passionate Web Developer based in Iowa, currently immersed in
            studying Web Development. Alongside my coursework, I juggle two jobs
            to support the lavish lifestyle of my two beloved cats. I'm driven
            by curiosity and creativity, and I look forward to expanding my
            skills even further—especially once I complete my studies and dive
            into personal projects that reflect my growth and ambition. I'm
            looking forward to exploring new opportunities to enhance my skills.
          </p>
          <br />
          <p>
            I have a strong interest in UI/UX Design, Graphic Design, 3D
            Modeling, and Traveling.
          </p>
        </div>

        <!-- Image section -->
        <div class="md:basis-1/2 flex justify-center items-center mt-6 md:mt-0">
          <img
            src="/assets/devin_ledesma.png"
            alt="image of myself"
            class="min-w-[300px] max-w-[450px]"
          />
        </div>
      </div>
    </div>
  </section>`,
  styles: ``,
})
export class AboutComponent {}
