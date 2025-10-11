import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a projects array with at least one item', () => {
    expect(component.projects).toBeDefined();
    expect(component.projects.length).toBeGreaterThan(1);
  });

  it('should have projects with all required properties', () => {
    component.projects.forEach((project) => {
      expect(project.id).toBeDefined();
      expect(project.name).toBeDefined();
      expect(project.technologies).toBeDefined();
      expect(project.description).toBeDefined();
      expect(project.image).toBeDefined();
    });
  });

  it('should have technologies as an array for each project', () => {
    component.projects.forEach((project) => {
      expect(Array.isArray(project.technologies)).toBe(true);
      expect(project.technologies.length).toBeGreaterThan(0);
    });
  });

  it('should have at least one project with a URL', () => {
    const projectsWithUrl = component.projects.filter((p) => p.url);
    expect(projectsWithUrl.length).toBeGreaterThan(0);
  });
});
