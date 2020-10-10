import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'backoffice-chapter-bar',
  templateUrl: './chapter-bar.component.html',
  styleUrls: ['./chapter-bar.component.css']
})
export class ChapterBarComponent implements OnInit {

  public isCollapsed = true;
  constructor() { }

  ngOnInit(): void {
  }

}
