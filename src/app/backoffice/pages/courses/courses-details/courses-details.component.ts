import { TypeTaskService } from './../../../../services/type-task.service';
import { TypeTask } from './../../../models/typeTask';
import { Course } from './../../../models/course';
import { ChapterService } from './../../../../services/chapter.service';
import { Chapter } from './../../../models/chapter';
import { ChapterForm } from './../../../forms/chapter.form';

import { NgForm, FormArray, FormBuilder, Validators, AbstractControl } from "@angular/forms";

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CoursesService } from '../../../../services/courses.service';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.css']
})
export class CoursesDetailsComponent implements OnInit {

  course: Course = new Course()

  closeResult = '';
  typeTasks: Array<TypeTask> = [];
  constructor(private service: CoursesService,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private chapterService: ChapterService,
    private typeTaskService: TypeTaskService) { }

  ngOnInit(): void {

    let id = this.route.snapshot.paramMap.get('id');
    this.service.getOne(id).subscribe(data => this.course = data.data)
    this.typeTaskService.getAll().subscribe(data => this.typeTasks = data.data)

  }
  open(content) {
    this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title' })
  }
  chapter: Chapter = new Chapter();
  chapterForm = this.fb.group(new ChapterForm(this.fb));
  saveChapterForm() {
    this.chapter.course = this.course;
    this.chapterService.create(this.chapter).subscribe(data => {
      this.chapter = data.data;
      this.course.chapters.push(this.chapter);
      this.chapter = new Chapter();
    })
  }

}
