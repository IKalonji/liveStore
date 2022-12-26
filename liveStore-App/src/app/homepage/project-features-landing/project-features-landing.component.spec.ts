import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFeaturesLandingComponent } from './project-features-landing.component';

describe('ProjectFeaturesLandingComponent', () => {
  let component: ProjectFeaturesLandingComponent;
  let fixture: ComponentFixture<ProjectFeaturesLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectFeaturesLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectFeaturesLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
