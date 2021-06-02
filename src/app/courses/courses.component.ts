import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course-service.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses;
  
  constructor(service: CourseService) {
    this.courses = service.getAuthors();
  }

  ngOnInit() {}
}
