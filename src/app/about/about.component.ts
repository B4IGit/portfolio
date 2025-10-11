import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: ` <section
    class="grid relative border-box gap-12 md:grid-cols-2 md:items-center md:gap-10 md:py-8"
  >
    <div class="bg-[var(--bg)]">
      <h3 class="text-2xl text-[var(--primary)] pb-4 md:pb-8">
        &lt;!&ndash; About &ndash;&gt;
      </h3>
      <div class="text-[var(--text-dark)] text-lg">
        <p>
          I'm a passionate Web Developer based in Iowa, currently immersed in
          studying Web Development. Alongside my coursework, I juggle two jobs
          to support the lavish lifestyle of my two beloved cats. I'm driven by
          curiosity and creativity, and I look forward to expanding my skills
          even further, especially once I complete my studies. I'm looking
          forward to exploring new opportunities to enhance my skills.
        </p>
        <br />
        <p>
          I have a strong passion for UI/UX design, graphic design, 3D modeling,
          and travel. During my time at Des Moines Area Community College
          (DMACC), I pursued an associate degree with a focus on web
          development. Recognizing the value of design skills in my field, I
          proactively advocated to enroll in specialized courses within the
          Graphic Design program—despite them being reserved for program majors.
        </p>

        <ul class="my-4 ml-4 space-y-2 text-[var(--secondary)]">
          <li>InDesign</li>
          <li>Illustrator</li>
          <li>Photoshop</li>
          <li>Typography</li>
        </ul>

        <p>
          After presenting a strong case for how these courses would enhance my
          education and career readiness, I was granted permission to take them
          and successfully completed each one. This experience reinforced my
          commitment to interdisciplinary learning and my determination to seek
          out opportunities that align with my goals.
        </p>
      </div>
    </div>
    <div>
      <img
        src="/portfolio/assets/portfolio_headshot_2025.png"
        alt="Headshot of myself"
        class="rounded-2xl"
      />
    </div>

    <div
      class="project-card gap-4 space-y-10 md:col-span-2 md:grid md:grid-cols-3"
    >
      <!-- Grid item 1 -->
      <div>
        <img
          src="/portfolio/assets/626.png"
          alt="Illustrator artwork"
          class="w-full object-cover rounded-md"
        />
        <h3>Minimalist Movie Poster</h3>
        <h2>Illustrator</h2>
        <p>
          Played around with opacity to create the vision of the opening screen
          from Lilo Stitch where he licks the inside of his glass prison.
        </p>
      </div>
      <!-- Grid item 2 -->
      <div>
        <img
          src="/portfolio/assets/LEDESMA_DEVIN_APPLE-TART_Page_2.png"
          alt="Illustrator artwork"
          class="w-full object-cover rounded-md"
        />
        <h3>Magazine Cover</h3>
        <h2>Illustrator with AI</h2>
        <p>
          The objective was to create a magazine cover utilizing AI that would
          be visually represent a two-page spread for the recipe (next image).
        </p>
      </div>
      <!-- Grid item 3 -->
      <div>
        <img
          src="/portfolio/assets/LEDESMA_DEVIN_APPLE-TART_Page_3.png"
          alt="Illustrator artwork"
          class="w-full object-cover rounded-md"
        />
        <h3>Recipe Page</h3>
        <h2>Typography + InDesign</h2>
        <p>
          By requiring the use of every word, this assignment pushed us to think
          critically about the layout, strategic use of whitespace, and
          structure for clear communication.
        </p>
      </div>
      <!-- Grid item 4 -->
      <div>
        <img
          src="/portfolio/assets/LEDESMA_DEVIN_Movie_Poster_Textured.png"
          alt="Illustrator artwork"
          class="w-full object-cover rounded-md"
        />
        <h3>Minimalist Movie Cover with Texture</h3>
        <h2>Typography + Illustrator</h2>
        <p>
          After sketching a concept for a movie, we designed a minimalist poster
          to represent it. As part of the assignment, I created a texture that
          made the poster look aged—showing folds, wear, and tear to give it a
          vintage feel.
        </p>
      </div>
      <!-- Grid item 5 -->
      <div>
        <img
          src="/portfolio/assets/LEDESMA_PLfinals_Page_2.png"
          alt="Illustrator artwork"
          class="w-full object-cover rounded-md"
        />
        <h3>Advertisement Flyer</h3>
        <h2>InDesign + Photoshop</h2>
        <p>
          This project illustrates how visual hierarchy (z-shaped pattern) and
          effective use of whitespace can guide the viewer’s attention, enhance
          readability, and create a clean, balanced layout.
        </p>
      </div>
      <!-- Grid item 6 -->
      <div>
        <img
          src="/portfolio/assets/LEDESMA_lyrical-layouts.png"
          alt="Illustrator artwork"
          class="w-full object-cover rounded-md"
        />
        <h3>Lyrical Layout</h3>
        <h2>Illustrator</h2>
        <p>
          For this project, we created a lyrical layout for a song, including
          the title, author, and full lyrics. The design reflected the chaotic
          nature of the lyrics—navigating through darkness—with a balanced use
          of color to guide the viewer and create a sense of depth.
        </p>
      </div>
      <!-- Grid item 7 -->
      <div>
        <img
          src="/portfolio/assets/LEDESMA_book-cover.png"
          alt="Illustrator artwork"
          class="w-full object-cover rounded-md"
        />
        <h3>Book Cover with Texture</h3>
        <h2>Illustrator</h2>
        <p>
          This cover visually narrates the story of Peter Pan, inviting the
          reader to feel as though they’re peering through the pages of the book
          themselves. The design features a card-style cutout, layering text and
          illustration to create depth and a sense of immersive storytelling.
        </p>
      </div>
    </div>
  </section>`,
  styles: `
    .project-card div {
      border: 2px solid var(--text);
      padding: 1rem;
      border-radius: 1rem;
    }

    .project-card h3,
    .project-card h2,
    .project-card p {
      background: var(--bg);
    }

    .project-card h3 {
      color: var(--text);
      font-size: 1.25rem;
      padding: 0.8rem 0;
    }

    .project-card h2 {
      color: var(--secondary);
      font-size: 0.8rem;
      padding-bottom: 0.5rem;
      margin-left: 0.5rem;
    }

    .project-card p {
      color: var(--text-dark);
      margin-left: 0.5rem;
    }
  `,
})
export class AboutComponent {}
