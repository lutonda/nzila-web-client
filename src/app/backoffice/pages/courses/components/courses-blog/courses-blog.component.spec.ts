import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesBlogComponent } from './courses-blog.component';

describe('CoursesBlogComponent', () => {
  let component: CoursesBlogComponent;
  let fixture: ComponentFixture<CoursesBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
