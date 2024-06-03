import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../core/services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courses: any[] = []; // Initialize courses

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courseService.getCourses().subscribe(data => {
      this.courses = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as object // Ensure data is treated as an object
        };
      });
    });
  }
}
