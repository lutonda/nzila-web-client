import { CoursesService } from '../../../../services/courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses-start.component.html',
  styleUrls: ['./courses-start.component.css']
})
export class CoursesStartComponent implements OnInit {

  courses=[]
  constructor(private service:CoursesService) { }

  ngOnInit(): void {

    //let id = this.route.snapshot.paramMap.get('id');
    this.service.getAll().subscribe(data => {
      this.courses = data.data

      //this.hymn.parts.forEach((part: Part)=>part.order=part.typePart.description=='Stanza' ? this.order++ : 0)
      //this.msbapAudioUrl = `http://${this.service.serverAddress()}/api/v1/files/${this.hymn.files[0].identity}`;
    })
  }

}
