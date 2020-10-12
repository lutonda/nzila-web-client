import { CourseCategoryService } from './../../../../services/course-category.service';
import { Course } from './../../../models/course';
import { CourseForm } from './../../../forms/course.form';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CoursesService } from '../../../../services/courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses-start.component.html',
  styleUrls: ['./courses-start.component.css']
})
export class CoursesStartComponent implements OnInit {

  courses:Array<Course>=[]
  categories:any=[]
  constructor(
    private coursesService:CoursesService, 
    private courseCategoryService: CourseCategoryService,
    private modalService: NgbModal,
    private fb: FormBuilder) { }

  ngOnInit(): void {

    this.courseCategoryService.getAll().subscribe(data=>{
      this.categories=data.data;
    })
    //let id = this.route.snapshot.paramMap.get('id');
    this.coursesService.getAll().subscribe(data => {
      this.courses = data.data

      //this.hymn.parts.forEach((part: Part)=>part.order=part.typePart.description=='Stanza' ? this.order++ : 0)
      //this.msbapAudioUrl = `http://${this.service.serverAddress()}/api/v1/files/${this.hymn.files[0].identity}`;
    })
  }

  open(content) {
    this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title' })
  }

  course: Course = new Course();
  courseForm = this.fb.group(new CourseForm(this.fb));
  saveCourseForm() {
    this.coursesService.create(this.course).subscribe(data => {
      this.course = data.data
      this.courses.push(this.course);
    })
  }

}
