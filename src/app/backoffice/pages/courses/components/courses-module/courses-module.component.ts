import { TypeTask } from './../../../../models/typeTask';
import { Chapter } from './../../../../models/chapter';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-backoffice-courses-module',
  templateUrl: './courses-module.component.html',
  styleUrls: ['./courses-module.component.css']
})
export class CoursesModuleComponent implements OnInit {

  @Input()
  chapters: Array<Chapter>=[] ;
  @Input()
  typeTasks: Array<TypeTask> = [];
  constructor() { }

  ngOnInit(): void {
  }

}
