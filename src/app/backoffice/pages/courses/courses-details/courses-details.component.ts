import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CoursesService } from '../../../../services/courses.service';

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.css']
})
export class CoursesDetailsComponent implements OnInit {

  course:any={}
  constructor(private service:CoursesService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    let id = this.route.snapshot.paramMap.get('id');
    this.service.getOne(id).subscribe(data => {
      this.course = data.data

      //this.hymn.parts.forEach((part: Part)=>part.order=part.typePart.description=='Stanza' ? this.order++ : 0)
      //this.msbapAudioUrl = `http://${this.service.serverAddress()}/api/v1/files/${this.hymn.files[0].identity}`;
    })
  }

}
