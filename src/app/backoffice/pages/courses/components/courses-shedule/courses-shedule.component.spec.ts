import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesSheduleComponent } from './courses-shedule.component';

describe('CoursesSheduleComponent', () => {
  let component: CoursesSheduleComponent;
  let fixture: ComponentFixture<CoursesSheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesSheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesSheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
