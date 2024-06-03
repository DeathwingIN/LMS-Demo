// dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { CourseService } from '../core/services/course.service';
import { LessonService } from '../core/services/lesson.service';
import { AssignmentService } from '../core/services/assignment.service';
import { Course } from '../core/models/course.model';
import { Lesson } from '../core/models/lesson.model';
import { Assignment } from '../core/models/assignment.model';
import { DocumentChangeAction } from '@angular/fire/compat/firestore'; // Import DocumentChangeAction

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  courses: any[] = [];
  lessons: any[] = [];
  assignments: any[] = [];

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
    this.courseService.getCourses().subscribe((courses: DocumentChangeAction<unknown>[]) => {
      this.courses = courses.map(course => course.payload.doc.data());
    });
  }

  fetchLessons() {
    // Assuming you have a courseId available, pass it to the getLessons method
    const courseId = ''; // Provide courseId here
    this.lessonService.getLessons(courseId).subscribe((lessons: DocumentChangeAction<unknown>[]) => {
      this.lessons = lessons.map(lesson => lesson.payload.doc.data());
    });
  }

  fetchAssignments() {
    // Assuming you have a lessonId available, pass it to the getAssignments method
    const lessonId = ''; // Provide lessonId here
    this.assignmentService.getAssignments(lessonId).subscribe((assignments: DocumentChangeAction<unknown>[]) => {
      this.assignments = assignments.map(assignment => assignment.payload.doc.data());
    });
  }

  // Implement create, update, delete methods for courses, lessons, and assignments
}
