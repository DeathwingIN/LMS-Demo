// src/app/dashboard/dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { CourseService } from '../core/services/course.service';
import { LessonService } from '../core/services/lesson.service';
import { AssignmentService } from '../core/services/assignment.service';
import { DocumentChangeAction } from '@angular/fire/compat/firestore';

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
      this.courses = courses.map(course => {
        const data = course.payload.doc.data() as { [key: string]: any }; // Cast data to an object
        return { id: course.payload.doc.id, ...data };
      });
    });
  }

  createCourse(course: any) {
    this.courseService.createCourse(course).then(() => {
      this.fetchCourses();
    });
  }

  updateCourse(courseId: string, course: any) {
    this.courseService.updateCourse(courseId, course).then(() => {
      this.fetchCourses();
    });
  }

  deleteCourse(courseId: string) {
    this.courseService.deleteCourse(courseId).then(() => {
      this.fetchCourses();
    });
  }

  // Similarly handle Lessons and Assignments...
  fetchLessons() {
    const courseId = ''; // Provide courseId here
    this.lessonService.getLessons(courseId).subscribe((lessons: DocumentChangeAction<unknown>[]) => {
      this.lessons = lessons.map(lesson => {
        const data = lesson.payload.doc.data() as { [key: string]: any }; // Cast data to an object
        return { id: lesson.payload.doc.id, ...data };
      });
    });
  }

  fetchAssignments() {
    const lessonId = ''; // Provide lessonId here
    this.assignmentService.getAssignments(lessonId).subscribe((assignments: DocumentChangeAction<unknown>[]) => {
      this.assignments = assignments.map(assignment => {
        const data = assignment.payload.doc.data() as { [key: string]: any }; // Cast data to an object
        return { id: assignment.payload.doc.id, ...data };
      });
    });
  }

  createLesson(lesson: any) {
    this.lessonService.createLesson(lesson).then(() => {
      this.fetchLessons();
    });
  }

  updateLesson(lessonId: string, lesson: any) {
    this.lessonService.updateLesson(lessonId, lesson).then(() => {
      this.fetchLessons();
    });
  }

  deleteLesson(lessonId: string) {
    this.lessonService.deleteLesson(lessonId).then(() => {
      this.fetchLessons();
    });
  }

  createAssignment(assignment: any) {
    this.assignmentService.createAssignment(assignment).then(() => {
      this.fetchAssignments();
    });
  }

  updateAssignment(assignmentId: string, assignment: any) {
    this.assignmentService.updateAssignment(assignmentId, assignment).then(() => {
      this.fetchAssignments();
    });
  }

  deleteAssignment(assignmentId: string) {
    this.assignmentService.deleteAssignment(assignmentId).then(() => {
      this.fetchAssignments();
    });
  }
}
