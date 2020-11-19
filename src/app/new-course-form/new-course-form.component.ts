import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent implements OnInit {

  categories=[
    {id:1, name:"php"},
    {id:2, name:"c#"},
    {id:3, name:"java"},
  ];
  constructor() { }

  submit(course){
    alert(course.name);
  }
  ngOnInit(): void {
  }

}
