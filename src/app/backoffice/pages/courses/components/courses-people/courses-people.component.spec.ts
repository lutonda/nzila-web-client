import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesPeopleComponent } from './courses-people.component';

describe('CoursesPeopleComponent', () => {
  let component: CoursesPeopleComponent;
  let fixture: ComponentFixture<CoursesPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
