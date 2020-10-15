import { Association } from './../../../../models/association';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-backoffice-courses-people',
  templateUrl: './courses-people.component.html',
  styleUrls: ['./courses-people.component.css']
})
export class CoursesPeopleComponent implements OnInit {

  @Input()
  associations: Array<Association> = [];
  constructor() { }

  ngOnInit(): void {
  }

  getInstructors() {
    return this.associations.filter((x: Association) => x.role.name === 'Instructor')
  }
  getNotInstructors() {
    return this.associations.filter((x: Association) => x.role.name !== 'Instructor')
  }

}
