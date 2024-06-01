import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../../core/services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
  courseId: string | null = null;
  course: any = {
    title: '',
    description: '',
    teacherId: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.courseId = this.route.snapshot.paramMap.get('id');
    if (this.courseId) {
      this.courseService.getCourse(this.courseId).subscribe((course: any) => {
        this.course = course.data();
      });
    }
  }

  saveCourse(): void {
    if (this.courseId) {
      this.courseService.updateCourse(this.courseId, this.course).then(() => {
        this.router.navigate(['/courses']);
      });
    } else {
      this.courseService.addCourse(this.course).then(() => {
        this.router.navigate(['/courses']);
      });
    }
  }

  deleteCourse(): void {
    if (this.courseId) {
      this.courseService.deleteCourse(this.courseId).then(() => {
        this.router.navigate(['/courses']);
      });
    }
  }
}
