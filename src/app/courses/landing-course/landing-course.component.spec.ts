import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingCourseComponent } from './landing-course.component';

describe('LandingCourseComponent', () => {
  let component: LandingCourseComponent;
  let fixture: ComponentFixture<LandingCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
