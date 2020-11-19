import { Component, OnInit } from '@angular/core';
import { CourseService }  from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses;
  constructor(service: CourseService) {
    this.courses = service. getCourses();
  }
  onSave() {
    alert('hiiiii course');
  }
  onKeyUp() {
    alert('key up');
  }
  ngOnInit(): void {
  }

}
