import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterBarComponent } from './chapter-bar.component';

describe('ChapterBarComponent', () => {
  let component: ChapterBarComponent;
  let fixture: ComponentFixture<ChapterBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
