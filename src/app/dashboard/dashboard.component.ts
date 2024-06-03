// dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { CourseService } from '../core/services/course.service';
import { LessonService } from '../core/services/lesson.service';
import { AssignmentService } from '../core/services/assignment.service';
import { Course } from '../core/models/course.model';
import { Lesson } from '../core/models/lesson.model';
import { Assignment } from '../core/models/assignment.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  courses: DocumentChangeAction<unknown>[];
  lessons: DocumentChangeAction<unknown>[];
  assignments: DocumentChangeAction<unknown>[];

  constructor(
    private courseService: CourseService,
    private lessonService: LessonService,
    private assignmentService: AssignmentService
  ) {}

  ngOnInit() {
    this.fetchCourses();
    this.fetchLessons();
    this.fetchAssignments();
  }

  fetchCourses() {
    this.courseService.getCourses().subscribe(courses => {
      this.courses = courses;
    });
  }

  fetchLessons() {
    this.lessonService.getLessons().subscribe(lessons => {
      this.lessons = lessons;
    });
  }

  fetchAssignments() {
    this.assignmentService.getAssignments().subscribe(assignments => {
      this.assignments = assignments;
    });
  }

  // Implement create, update, delete methods for courses, lessons, and assignments
}
