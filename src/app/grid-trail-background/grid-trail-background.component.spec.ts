import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridTrailBackgroundComponent } from './grid-trail-background.component';

describe('GridTrailBackgroundComponent', () => {
  let component: GridTrailBackgroundComponent;
  let fixture: ComponentFixture<GridTrailBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridTrailBackgroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridTrailBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
