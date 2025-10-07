import 'tailwindcss';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <!-- Hero -->
    <section>
      <div class="container flex flex-col md:flex-row min-w-0 md:p-6 gap-6">
        <!-- Left: 50% -->
        <div class="w-full sm:p-2 md:w-1/2 p-6">
          <!-- Title -->
          <div>
            <h1 class="text-4xl mt-10 sm:text-4xl font-bold">
              Hello, <br />
              I am <span class="text-[var(--primary)]">Devin Ledesma</span>, I'm
              a Professional
              <span class="text-[var(--tertiary)]">Full-Stack</span>
              <span class="text-[var(--secondary)]"> Web Developer</span>.
            </h1>
          </div>
          <!-- Social links -->
          <div class="flex items-center justify-center my-15 md:justify-start">
            <div class="social-links flex flex-wrap gap-20 md:gap-6">
              <div>
                <a href="https://github.com/b4igit" target="_blank">
                  <svg
                    class="w-10 h-10 fill-current bg-[var(--bg)]"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                    />
                  </svg>
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/devin-f-ledesma/"
                  target="_blank"
                >
                  <svg
                    class="w-10 h-10 fill-current bg-[var(--bg)]"
                    height="100%"
                    style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
                    version="1.1"
                    viewBox="0 0 512 512"
                    width="100%"
                    xml:space="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:serif="http://www.serif.com/"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <path
                      d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-386.892,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Zm-288.985,423.278l0,-225.717l-75.04,0l0,225.717l75.04,0Zm270.539,0l0,-129.439c0,-69.333 -37.018,-101.586 -86.381,-101.586c-39.804,0 -57.634,21.891 -67.617,37.266l0,-31.958l-75.021,0c0.995,21.181 0,225.717 0,225.717l75.02,0l0,-126.056c0,-6.748 0.486,-13.492 2.474,-18.315c5.414,-13.475 17.767,-27.434 38.494,-27.434c27.135,0 38.007,20.707 38.007,51.037l0,120.768l75.024,0Zm-307.552,-334.556c-25.674,0 -42.448,16.879 -42.448,39.002c0,21.658 16.264,39.002 41.455,39.002l0.484,0c26.165,0 42.452,-17.344 42.452,-39.002c-0.485,-22.092 -16.241,-38.954 -41.943,-39.002Z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div class="buttons flex flex-col sm:flex-row w-full h-auto gap-6">
            <button
              class="flex items-center gap-3 border-2 py-3 px-10 rounded-md bg-[var(--bg)] cursor-pointer"
            >
              <svg
                height="8.4666mm"
                style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                version="1.1"
                viewBox="0 0 846.66 846.66"
                width="8.4666mm"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <defs><style type="text/css"></style></defs>
                <g id="Layer_x0020_1">
                  <path
                    class="fil0"
                    d="M536.24 308.11c17.71,11.91 32.87,27.26 44.52,45.08 16.36,25.02 25.87,54.9 25.87,86.96 0,11.43 -9.27,20.71 -20.71,20.71l-276.84 0c-11.44,0 -20.71,-9.28 -20.71,-20.71 0,-32.06 9.51,-61.94 25.87,-86.96 11.65,-17.82 26.82,-33.17 44.52,-45.08 -12.97,-17.98 -20.62,-40.06 -20.62,-63.93 0,-60.4 48.96,-109.36 109.36,-109.36 60.4,0 109.36,48.96 109.36,109.36 0,23.87 -7.65,45.95 -20.62,63.93zm-427.12 -201.02l27.63 0 0 -77.07c0,-11.44 9.27,-20.71 20.71,-20.71l492.19 0c59.77,0 108.6,48.82 108.6,108.6l0 698.73c0,11.44 -9.28,20.71 -20.71,20.71l-580.08 0c-11.44,0 -20.71,-9.27 -20.71,-20.71l0 -77.07 -27.63 0c-11.43,0 -20.71,-9.27 -20.71,-20.71l0 -114.26c0,-11.44 9.28,-20.71 20.71,-20.71l27.63 0 0 -321.12 -27.63 0c-11.43,0 -20.71,-9.27 -20.71,-20.71l0 -114.26c0,-11.44 9.28,-20.71 20.71,-20.71zm20.72 41.42l0 72.84 64.04 0 0 -72.84 -64.04 0zm0 476.8l0 72.84 64.04 0 0 -72.84 -64.04 0zm519.81 -574.58l-471.48 0 0 56.36 36.42 0c11.44,0 20.71,9.27 20.71,20.71l0 114.26c0,11.44 -9.27,20.71 -20.71,20.71l-36.42 0 0 321.12 36.42 0c11.44,0 20.71,9.27 20.71,20.71l0 114.26c0,11.44 -9.27,20.71 -20.71,20.71l-36.42 0 0 56.36 538.65 0 0 -678.02c0,-36.91 -30.27,-67.18 -67.17,-67.18zm-282.35 661.11c-27.24,0 -27.24,-41.42 0,-41.42l160.4 0c27.25,0 27.25,41.42 0,41.42l-160.4 0zm0 -167.32c-27.24,0 -27.24,-41.42 0,-41.42l160.4 0c27.25,0 27.25,41.42 0,41.42l-160.4 0zm0 83.66c-27.24,0 -27.24,-41.42 0,-41.42l160.4 0c27.25,0 27.25,41.42 0,41.42l-160.4 0zm22.82 -290.89c-16.64,9.31 -30.81,22.58 -41.25,38.55 -8.47,12.96 -14.46,27.72 -17.27,43.59l231.8 0c-2.81,-15.87 -8.8,-30.63 -17.27,-43.59 -10.44,-15.97 -24.61,-29.24 -41.24,-38.55 -16.68,10.31 -36.34,16.25 -57.39,16.25 -21.05,0 -40.7,-5.95 -57.38,-16.25zm57.38 -161.05c-37.52,0 -67.94,30.42 -67.94,67.94 0,37.52 30.42,67.94 67.94,67.94 37.52,0 67.94,-30.42 67.94,-67.94 0,-37.52 -30.42,-67.94 -67.94,-67.94z"
                  />
                </g>
              </svg>
              Contact
            </button>
            <button
              class="flex items-center gap-3 border-2 py-3 px-10 rounded-md bg-[var(--bg)] cursor-pointer"
            >
              <svg
                height="8.4666mm"
                style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                version="1.1"
                viewBox="0 0 846.66 846.66"
                width="8.4666mm"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <defs><style type="text/css"></style></defs>
                <g id="Layer_x0020_1">
                  <path
                    class="fil0"
                    d="M423.33 279.52c54.2,0 98.47,44.26 98.47,98.47l0 45.71c0,11.4 -9.25,20.65 -20.65,20.65l-155.64 0c-11.4,0 -20.65,-9.25 -20.65,-20.65l0 -45.71c0,-54.2 44.27,-98.47 98.47,-98.47zm-182.05 256.57c-27.16,0 -27.16,-41.3 0,-41.3l364.1 0c27.16,0 27.16,41.3 0,41.3l-364.1 0zm0 177.71c-27.16,0 -27.16,-41.29 0,-41.29l364.1 0c27.16,0 27.16,41.29 0,41.29l-364.1 0zm0 -88.85c-27.16,0 -27.16,-41.3 0,-41.3l364.1 0c27.16,0 27.16,41.3 0,41.3l-364.1 0zm-121.37 -614.55l465.97 0c5.7,0 10.86,2.31 14.6,6.05l140.87 140.87c4.03,4.03 6.05,9.32 6.05,14.6l0 643.69c0,11.4 -9.25,20.65 -20.65,20.65l-606.84 0c-11.4,0 -20.65,-9.25 -20.65,-20.65l0 -784.56c0,-11.4 9.25,-20.65 20.65,-20.65zm457.42 41.29l-436.78 0 0 743.28 565.56 0 0 -614.5 -128.78 -128.78zm-154 57.32c45.98,0 83.25,37.28 83.25,83.26 0,45.97 -37.27,83.25 -83.25,83.25 -45.98,0 -83.25,-37.28 -83.25,-83.25 0,-45.98 37.27,-83.26 83.25,-83.26zm0 41.3c-23.18,0 -41.96,18.78 -41.96,41.96 0,23.17 18.78,41.96 41.96,41.96 23.18,0 41.96,-18.79 41.96,-41.96 0,-23.18 -18.78,-41.96 -41.96,-41.96zm0 170.5c-31.4,0 -57.18,25.77 -57.18,57.18l0 25.07 114.36 0 0 -25.07c0,-31.41 -25.78,-57.18 -57.18,-57.18z"
                  />
                </g>
              </svg>
              Resume
            </button>
          </div>
        </div>
        <!-- Right: 50% -->
        <div class="w-full md:w-1/2 p-2">
          <div class="code-container mx-auto bg-[var(--bg)] rounded">
            <div class="code-navbar border-b-2 p-3 flex gap-1.5">
              <div class="w-3 h-3 rounded-full bg-[var(--primary)]"></div>
              <div class="w-3 h-3 rounded-full bg-[var(--secondary)]"></div>
              <div class="w-3 h-3 rounded-full bg-[var(--tertiary)]"></div>
            </div>
            <div class="code-content border-box p-2">
              <pre ngNonBindable>
               <code>
                  <span class="ml-2 text-[var(--const)]">const </span> currentStudent <span class="text-[var(--const)]">=</span> <span class="text-[var(--symbol)]">&#123;</span>
                    <span class="ml-6">name:</span> <span class="text-[var(--symbol)]">'<span class="text-[var(--string)]">Devin Ledesma</span>'</span>,
                  <span class="ml-6">status:</span> <span class="text-[var(--symbol)]">'<span class="text-[var(--string)]">Web Development Student</span>'</span>,
                 <span class="ml-6">skills:</span> <span class="text-[var(--symbol)]">['<span class="text-[var(--skill)]">Angular</span>'</span>, <span class="text-[var(--symbol)]">'<span class="text-[var(--skill)]">HTML5</span>'</span>, <span class="text-[var(--symbol)]">'<span class="text-[var(--skill)]">Tailwind</span>'</span>, <span class="text-[var(--symbol)]">'<span class="text-[var(--skill)]">Node.js</span>'</span>, <span class="text-[var(--symbol)] ml-6">'<span class="text-[var(--skill)]">Express</span>'</span>, <span class="text-[var(--symbol)]">'<span class="text-[var(--skill)]">MongoDB</span>']</span>,
                  <span class="ml-6">traits:</span> <span class="text-[var(--symbol)]">&#123;</span>
                  <span class="ml-12">hardWorker:</span> <span class="text-[var(--boolean)]">true</span>,
                  <span class="ml-12">willingnessToLearn:</span> <span class="text-[var(--boolean)]">true</span>,
                  <span class="ml-12">problemSolver:</span> <span class="text-[var(--boolean)]">undefined</span>,
                  <span class="text-[var(--symbol)] ml-6">&#125;</span>,
                  <span class="text-[var(--const)] ml-6">readyForCareer: </span><span class="text-[var(--boolean)]">function</span><span class="text-[var(--symbol)]">() &#123;</span>
                    <span class="text-[var(--string)] ml-12">return</span>
                  <span class="text-[var(--boolean)] ml-12">this</span>.traits.hardWorker <span class="text-[var(--string)]">&&</span>
                   <span class="text-[var(--boolean)] ml-12">this</span>.traits.problemSolver <span class="text-[var(--string)]">&&</span>
                   <span class="text-[var(--boolean)] ml-12">this</span>.skills.length >= <span class="text-[var(--skill)]">4</span>;
                  <span class="text-[var(--symbol)] ml-6">&#125;</span>
                <span class="text-[var(--tertiary)] ml-2">&#125;</span>;
                <span class="ml-2">if</span> <span class="text-[var(--tertiary)]">(</span>currentStudent.<span class="text-[var(--const)]">lookingForCareer</span><span class="text-[var(--tertiary)]">()) &#123;</span>
                 <span class="text-[var(--skill)] ml-6">console.log</span><span class="text-[var(--symbol)]">('</span>Ready to take on real-world challenges!<span class="text-[var(--symbol)]">')</span>;
                <span class="text-[var(--symbol)] ml-2">&#125;</span> else <span class="text-[var(--symbol)]">&#123;</span>
                  <span class="text-[var(--skill)] ml-6">console.log</span>('Still learning new skills!<span>')</span>;
                <span>&#125;</span>
              </code>
            </pre>
            </div>
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

    .code-content code {
      display: block;
      max-width: 100%;
    }

    .social-links svg {
      fill: var(--primary);
    }

    .buttons svg {
      fill: var(--secondary);
    }
  `,
})
export class HomeComponent {}
