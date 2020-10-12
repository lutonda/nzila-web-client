import { TypeTask } from './../../models/typeTask';
import { Chapter } from './../../models/chapter';
import { Task } from './../../models/task';
import { Component, OnInit, Input } from '@angular/core';

import { NgForm, FormArray, FormBuilder, Validators, AbstractControl } from "@angular/forms";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { TaskService } from 'src/app/services/task.service';
import { TaskForm } from '../../forms/task.form';
@Component({
  selector: 'backoffice-chapter-bar',
  templateUrl: './chapter-bar.component.html',
  styleUrls: ['./chapter-bar.component.scss']
})
export class ChapterBarComponent implements OnInit {

  @Input()
  chapter: Chapter = new Chapter();
  @Input()
  typeTasks: Array<TypeTask> = [];
  public isCollapsed = true;
  public editor = ClassicEditor;

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private tasService: TaskService) { }

  ngOnInit(): void {
  }

  open(content) {
    this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title' })
  }
  task: Task = new Task()
  taskForm = this.fb.group(new TaskForm(this.fb));
  saveChapterForm() {
    this.task.chapter = this.chapter;
    this.tasService.create(this.task).subscribe(data => {
      this.task = data.data;
      this.task.type=this.typeTasks.filter(x=>x._id==this.task.type)
      this.chapter.tasks.push(this.task);
      this.task = new Task();
    })
  }
}
