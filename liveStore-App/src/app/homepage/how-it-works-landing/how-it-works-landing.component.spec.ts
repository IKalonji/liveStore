import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowItWorksLandingComponent } from './how-it-works-landing.component';

describe('HowItWorksLandingComponent', () => {
  let component: HowItWorksLandingComponent;
  let fixture: ComponentFixture<HowItWorksLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowItWorksLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowItWorksLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
