import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { Routes } from '@angular/router';

describe('AppComponent (Standalone)', () => {
  beforeEach(async () => {
    const activatedRouteStub = {
      snapshot: {
        paramMap: {
          get: () => 'staticValue',
        },
      },
      queryParams: of({}),
    };

    const routes: Routes = [{ path: 'about', component: AboutComponent }];

    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot(routes)], // Include RouterTestingModule to handle routing AboutComponent
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteStub }],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should display the correct route for the About component', () => {
    const router = TestBed.inject(Router);
    const route: any = router.config.find((r) => r.path === 'about');
    expect(route).toBeDefined(); // Checks if the About component is defined

    if (route) {
      expect(route.component).toBe(AboutComponent); // Checks if the About component is correctly set
    }
  });
});
