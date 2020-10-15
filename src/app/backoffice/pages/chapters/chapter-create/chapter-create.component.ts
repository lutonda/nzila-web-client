import { FormBuilder } from '@angular/forms';
import { Chapter } from './../../../models/chapter';
import { ChapterForm } from './../../../forms/chapter.form';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backoffice-chapter-create',
  templateUrl: './chapter-create.component.html',
  styleUrls: ['./chapter-create.component.css']
})
export class ChapterCreateComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  chapter: Chapter = new Chapter();
  chapterForm = this.fb.group(new ChapterForm(this.fb));
  saveChapterForm(){
    alert('save')
  }

}
