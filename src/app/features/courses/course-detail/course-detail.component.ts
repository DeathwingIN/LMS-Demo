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
      this.courseService.getCourses().subscribe((courses: any[]) => {
        const course = courses.find(c => c.id === this.courseId);
        if (course) {
          this.course = course;
        }
      });
    }
  }

  saveCourse(): void {
    if (this.courseId) {
      this.courseService.updateCourse(this.courseId, this.course).then(() => {
        this.router.navigate(['/courses']);
      }).catch(error => {
        console.error('Error updating course:', error);
      });
    } else {
      this.courseService.createCourse(this.course).then(() => {
        this.router.navigate(['/courses']);
      }).catch(error => {
        console.error('Error creating course:', error);
      });
    }
  }

  deleteCourse(): void {
    if (this.courseId) {
      this.courseService.deleteCourse(this.courseId).then(() => {
        this.router.navigate(['/courses']);
      }).catch(error => {
        console.error('Error deleting course:', error);
      });
    }
  }
}
