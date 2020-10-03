import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseLandingComponent } from './course-landing.component';

describe('CourseLandingComponent', () => {
  let component: CourseLandingComponent;
  let fixture: ComponentFixture<CourseLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
