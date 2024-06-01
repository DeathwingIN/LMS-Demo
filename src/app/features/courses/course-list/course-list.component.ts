import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../core/services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courses: any[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((data: any) => {
      this.courses = data.map((e: any) => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        };
      });
    });
  }
}
