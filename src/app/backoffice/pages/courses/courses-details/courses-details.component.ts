import { HttpClient } from '@angular/common/http';
import { FilesService } from './../../../../services/files.service';
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
  styleUrls: ['./courses-details.component.scss']
})
export class CoursesDetailsComponent implements OnInit {

  course: Course = new Course()
  
  saveCost(value){
    this.course.name=value;
  }
  tab='people';
  closeResult = '';
  serverAddress = '';
  typeTasks: Array<TypeTask> = [];
  constructor(private service: CoursesService,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private chapterService: ChapterService,
    private typeTaskService: TypeTaskService,
    private filesService: FilesService,
    private http: HttpClient) { }

  ngOnInit(): void {

    let id = this.route.snapshot.paramMap.get('id');
    this.service.getOne(id).subscribe(data => { this.course = data.data; })
    this.typeTaskService.getAll().subscribe(data => this.typeTasks = data.data)
    this.serverAddress = this.service.serverAddress();
  }
  setTab(tab){
    this.tab=tab;
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
  getLinkCover() {
    return 'http://' + this.serverAddress + '/uploads/courses/' + this.course.code + '/cover.jpg'
  }
  onFileSelect(input) {
    this.course.coverPic = 'https://' + this.serverAddress + '/uploads/courses/' + this.course.code + '/cover.jpg';
    const formData = new FormData();
    formData.append('file', input.files[0])
    this.http.post('http://127.0.0.1:8800/api/v1/system/files/upload?fileName=cover&path=courses/' + this.course.code + '&id=' + this.course._id, formData).subscribe((res: any) => {
      this.course.coverPic = 'http://' + this.serverAddress + '/uploads/courses/' + this.course.code + '/cover.jpg';
    });

  }

}
