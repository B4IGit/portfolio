import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  template: `
    <div
      class="resume-container max-w-[9in] h-auto mx-auto p-4 rounded sm:p-6 lg:p-8 bg-white text-black"
    >
      <!-- Header Section -->
      <header
        class="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 lg:gap-8 mb-8"
      >
        <!-- Profile Section -->
        <div class="profile-section">
          <!-- Profile Image - Hidden on small screens, shown in header on large -->
          <img
            src="assets/portfolio_headshot_2025.png"
            alt="Devin Ledesma"
            class="hidden lg:block w-full max-w-[280px] rounded-lg shadow-lg mb-6"
          />

          <!-- Contact Info -->
          <div class="contact-info space-y-2 text-sm lg:text-base mb-6">
            <div class="flex items-start gap-2">
              <span class="font-bold">P:</span>
              <span><a href="tel:5153306497">515-330-6497</a></span>
            </div>
            <div class="flex items-start gap-2">
              <span class="font-bold">E:</span>
              <span
                ><a href="mailto:dev.dfledesma@gmail.com" class="break-all">
                  dev.dfledesma&#64;gmail.com
                </a></span
              >
            </div>
            <div class="flex items-start gap-2">
              <span class="font-bold">W:</span>
              <span>YOU ARE ALREADY HERE</span>
            </div>
          </div>

          <!-- Professional Skills -->
          <div class="mb-6">
            <h3 class="font-bold text-base lg:text-lg mb-3 border-b pb-2">
              PROFESSIONAL SKILLS
            </h3>
            <ul
              class="grid grid-cols-2 lg:grid-cols-1 gap-2 text-xs lg:text-sm"
            >
              <li>Adaptability</li>
              <li>Communication</li>
              <li>Continuous Learning</li>
              <li>Empathy</li>
              <li>Problem-Solving</li>
              <li>Team Collaboration</li>
              <li>Time Management</li>
              <li>Organization</li>
            </ul>
          </div>

          <!-- Technical Skills -->
          <div class="mb-6">
            <h3 class="font-bold text-base lg:text-lg mb-3 border-b pb-2">
              TECHNICAL SKILLS
            </h3>
            <div class="space-y-2 text-xs lg:text-sm">
              <div>
                <p class="font-semibold">[ Programming Languages ]</p>
                <p class="ml-2 text-gray-700">
                  (HTML5, CSS3, JavaScript (ES6+), TypeScript)
                </p>
              </div>
              <div>
                <p class="font-semibold">[ Frameworks & Libraries ]</p>
                <p class="ml-2 text-gray-700">
                  (Angular, React, Node.js, Express.js, Tailwind CSS)
                </p>
              </div>
              <div>
                <p class="font-semibold">[ Databases ]</p>
                <p class="ml-2 text-gray-700">(MySQL, MongoDB)</p>
              </div>
              <div>
                <p class="font-semibold">[ Version Control Systems ]</p>
                <p class="ml-2 text-gray-700">(Git, GitHub)</p>
              </div>
              <div>
                <p class="font-semibold">[ Testing Tools ]</p>
                <p class="ml-2 text-gray-700">
                  (Jest, Jasmine, Postman, Chrome DevTools)
                </p>
              </div>
              <div>
                <p class="font-semibold">[ Development Methodologies ]</p>
                <p class="ml-2 text-gray-700">(Agile, DevOps, Scrum, CI/CD)</p>
              </div>
              <div>
                <p class="font-semibold">[ IDEs & Tools ]</p>
                <p class="ml-2 text-gray-700">(WebStorm, PyCharm, VS Code)</p>
              </div>
              <div>
                <p class="font-semibold">[ Adobe Software ]</p>
              </div>
              <div>
                <p class="font-semibold">[ Microsoft Office ]</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Main Content -->
        <div class="main-content">
          <!-- Mobile Image -->
          <div class="lg:hidden mb-6 flex justify-center">
            <img
              src="assets/portfolio_headshot_2025.png"
              alt="Devin Ledesma"
              class="w-48 h-48 object-cover rounded shadow-lg"
            />
          </div>

          <!-- Name and Title -->
          <div class="mb-6">
            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
              DEVIN<br />LEDESMA
            </h1>
            <!-- For Mobile -->
            <div class="md:hidden">
              <p
                class="text-base sm:text-lg lg:text-xl border-b-2 border-black pb-2 mb-2"
              >
                WEB DEVELOPER | STUDENT
              </p>
              <p class="text-right text-xs sm:text-sm font-semibold mb-2">
                ANKENY, IA
              </p>
            </div>
            <!-- For Desktop -->
            <div class="hidden md:block">
              <div
                class="flex items-center justify-between text-xl border-b-2 border-black pb-2 mb-2"
              >
                <span>WEB DEVELOPER | STUDENT</span>
                <span class="text-sm justify-end font-semibold"
                  >Ankeny, IA</span
                >
              </div>
            </div>
            <div
              class="flex flex-col sm:flex-row sm:justify-between gap-2 text-xs sm:text-sm"
            >
              <span class="break-all"
                >GitHub:
                <a href="github.com/B4iGit" target="_blank" class="font-bold"
                  >B4IGit</a
                ></span
              >
              <span class="hidden sm:inline">||</span>
              <span class="break-all"
                >LinkedIn:
                <a
                  href="linkedin.com/in/devin-f-ledesma/"
                  target="_blank"
                  class="font-bold"
                  >Devin-F-Ledesma</a
                ></span
              >
            </div>
          </div>

          <!-- Professional Summary -->
          <section class="mb-6 lg:mb-8">
            <div class="flex items-start gap-3 lg:gap-4">
              <div
                class="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-[var(--secondary)] flex items-center justify-center flex-shrink-0"
              >
                <svg
                  class="w-4 h-4 lg:w-5 lg:h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  />
                </svg>
              </div>
              <div>
                <h2 class="font-bold text-lg lg:text-xl mb-2 lg:mb-3">
                  PROFESSIONAL SUMMARY
                </h2>
                <p class="text-xs lg:text-sm mb-2 lg:mb-3">
                  Dedicated and motivated senior pursuing a Bachelor's degree in
                  Web Development, with hands-on experience in full-stack
                  development and a solid foundation in technologies including
                  Angular, Node.js, MongoDB, and TypeScript. Passionate about
                  learning from industry experts and contributing to innovative
                  projects.
                </p>
              </div>
            </div>
          </section>

          <!-- Education -->
          <section class="mb-6 lg:mb-8">
            <div class="flex items-start gap-3 lg:gap-4">
              <div
                class="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-[var(--secondary)] flex items-center justify-center flex-shrink-0"
              >
                <svg
                  class="w-4 h-4 lg:w-5 lg:h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
                  />
                </svg>
              </div>
              <div class="flex-1">
                <h2 class="font-bold text-lg lg:text-xl mb-3 lg:mb-4">
                  EDUCATION
                </h2>

                <!-- Timeline -->
                <div
                  class="relative border-l-2 border-gray-300 pl-6 lg:pl-8 space-y-6 lg:space-y-8"
                >
                  <!-- Bellevue University -->
                  <div class="relative">
                    <div
                      class="absolute -left-[29px] lg:-left-[40px] w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-black"
                    ></div>
                    <div
                      class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-2 mb-2"
                    >
                      <h3 class="font-bold text-sm lg:text-base">
                        Bellevue University
                      </h3>
                      <span class="text-xs lg:text-sm font-semibold"
                        >Web Development / BS</span
                      >
                    </div>
                    <p class="text-xs lg:text-sm mb-2">2024-2026</p>
                    <p class="text-xs leading-relaxed">
                      Throughout this accelerated program, I gained pratical
                      full stack experience in building and designing front end
                      interfaces. Gained knowledge in back end server scripting
                      and database, and gained professional experience in
                      delivering a full-stack project individual and part as a
                      team. Topics included JavaScript, DevOps, Agile
                      Methodologies, API Development, Container Technologies,
                      Angulare, and TypeScript.
                    </p>
                  </div>

                  <!-- DMACC -->
                  <div class="relative">
                    <div
                      class="absolute -left-[29px] lg:-left-[40px] w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-black"
                    ></div>
                    <div
                      class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-2 mb-2"
                    >
                      <h3 class="font-bold text-sm lg:text-base">
                        Des Moines Area<br />Community College
                      </h3>
                      <span class="text-xs lg:text-sm font-semibold"
                        >Web Development / AAS</span
                      >
                    </div>
                    <p class="text-xs lg:text-sm mb-2">2022 - 2024</p>
                    <p class="text-xs leading-relaxed">
                      As part of my studies, I earned a degree in this field. My
                      coursework covered essential topics such as HTML, CSS,
                      JavaScript, Marketing, Graphic Design, PHP and MySQL,
                      allowing me to create dynamic full-stack websites.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Work Experience -->
          <section class="mb-6 lg:mb-8">
            <div class="flex items-start gap-3 lg:gap-4">
              <div
                class="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-[var(--secondary)] flex items-center justify-center flex-shrink-0"
              >
                <svg
                  class="w-4 h-4 lg:w-5 lg:h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  />
                  <path
                    d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
                  />
                </svg>
              </div>
              <div class="flex-1">
                <h2 class="font-bold text-lg lg:text-xl mb-3 lg:mb-4">
                  WORK EXPERIENCE
                </h2>

                <!-- Timeline -->
                <div class="relative border-l-2 border-gray-300 pl-6 lg:pl-8">
                  <div class="relative">
                    <div
                      class="absolute -left-[29px] lg:-left-[40px] w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-black"
                    ></div>
                    <div
                      class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-2 mb-2"
                    >
                      <h3 class="font-bold text-sm lg:text-base">
                        Cabaret Sports Bar<br />& Grille
                      </h3>
                      <span class="text-xs lg:text-sm font-semibold"
                        >May 2023 - Present</span
                      >
                    </div>
                    <p class="text-xs leading-relaxed">
                      Responsibilities include preparing and serving a variety
                      of classic beverages, from curated cocktails to wine and
                      beer. Additionally, I ensure the bar is well-organized,
                      attractive, and stocked with essentials. I check IDs to
                      verify legal drinking age, handle payments, and exercise
                      judgment when necessary.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Footer Quote -->
          <div
            class="mb-0 lg:mt-8 p-3 lg:p-4 bg-[var(--bg)] text-[var(--primary)] text-center text-[10px] sm:text-xs italic"
          >
            THE JOURNEY FROM LEARNER TO EXPERT IS PAVED WITH PERSISTENCE,
            CURIOSITY, AND A RELENTLESS DRIVE TO GROW.
          </div>
        </div>
      </header>

      <!-- Download Button -->
      <div class="text-center mt-6 lg:mt-8">
        <a
          href="assets/RESUME_2025.pdf"
          download="Devin_Ledesma_Resume_2025.pdf"
          class="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-[#1F1F1F] text-white rounded-lg hover:bg-[#2a2a2a] transition-colors shadow-lg"
        >
          <svg
            class="w-4 h-4 sm:w-5 sm:h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Download PDF Resume
        </a>
      </div>
    </div>
  `,
  styles: `
    .resume-container {
      font-family: Arial, sans-serif;
      line-height: 1.6;
    }

    @media print {
      .resume-container {
        max-width: 100%;
        padding: 0;
      }

      .lg\\:hidden {
        display: none !important;
      }

      .hidden.lg\\:block {
        display: block !important;
      }
    }
  `,
})
export class ResumeComponent {}
