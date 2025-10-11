import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  name: string;
  technologies: string[];
  description: string;
  image: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="projects-container py-8">
      <h3 class="text-2xl text-[var(--primary)] pb-4 md:pb-8">
        &lt;!&ndash; Projects &ndash;&gt;
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        <div
          *ngFor="let project of projects"
          class="project-card relative overflow-hidden rounded-lg border-[var(--primary)] border-2  transition-all duration-300 h-[400px]"
        >
          <!-- Image Container -->
          <div
            class="image-container absolute inset-0 ml-[20%] overflow-hidden"
          >
            <img
              [src]="project.image"
              [alt]="project.name"
              class="w-full h-full object-cover transition-transform duration-700 ease-in-out project-image"
            />
          </div>

          <!-- Project Info (Visible on hover) -->
          <div
            class="project-info absolute bottom-0 left-0 right-0 bg-[var(--bg)] p-6 transform translate-y-0 transition-all duration-500"
          >
            <div class="flex">
              <!-- Left Column: Arrow Icon -->
              <div
                class="w-1/5 flex items-center justify-center text-4xl text-[var(--secondary)]"
              >
                <svg
                  class="w-6 h-6 text-[var(--text)]"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>

              <!-- Right Column: Project Content -->
              <div class="w-4/5">
                <h3 class="text-2xl font-bold mb-3 text-[var(--secondary)]">
                  {{ project.name }}
                </h3>

                <div class="technologies flex flex-wrap gap-2 mb-4">
                  <span
                    *ngFor="let tech of project.technologies"
                    class="px-3 py-1 text-xs font-semibold rounded-full bg-[var(--tertiary)] text-[var(--bg)]"
                  >
                    {{ tech }}
                  </span>
                </div>

                <p class="text-sm text-[var(--text)] leading-relaxed">
                  {{ project.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: `
    .project-card {
      position: relative;
      height: 400px;
    }

    .project-card:hover .project-image {
      transform: translateX(100%);
    }

    .project-card:hover .project-info {
      transform: translateX(0);
    }

    .image-container {
      z-index: 10;
    }

    .project-info {
      z-index: 5;
    }

    @media (max-width: 768px) {
      .project-card {
        height: 350px;
      }

      .project-info {
        padding: 1.5rem;
      }

      .project-info h3 {
        font-size: 1.25rem;
      }

      .project-info p {
        font-size: 0.813rem;
      }
    }
  `,
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      name: 'Devin Ledesma',
      technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'P5.js'],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet enim harum illo impedit iure natus nulla rem repellendus totam voluptates.',
      image: 'assets/rpg-character-project.png',
    },
    {
      id: 2,
      name: 'Devin Ledesma',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet enim harum illo impedit iure natus nulla rem repellendus totam voluptates.',
      image: '',
    },
    {
      id: 3,
      name: 'Devin Ledesma',
      technologies: ['Angular', 'Firebase', 'Material UI', 'RxJS'],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet enim harum illo impedit iure natus nulla rem repellendus totam voluptates.',
      image: '',
    },
    {
      id: 4,
      name: 'Devin Ledesma',
      technologies: ['JavaScript', 'HTML5', 'CSS3'],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet enim harum illo impedit iure natus nulla rem repellendus totam voluptates.',
      image: '',
    },
  ];
}
