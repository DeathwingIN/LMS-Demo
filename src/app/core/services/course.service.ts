import { Injectable } from '@angular/core';
import { AngularFirestore, QueryFn } from '@angular/fire/compat/firestore'; // Import AngularFirestore
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private firestore: AngularFirestore) {}

  createCourse(course: Course) {
    return this.firestore.collection('courses').add(course);
  }

  updateCourse(courseId: string, course: Partial<Course>) {
    return this.firestore.collection('courses').doc(courseId).update(course);
  }

  deleteCourse(courseId: string) {
    return this.firestore.collection('courses').doc(courseId).delete();
  }

  getCourses() {
    return this.firestore.collection('courses').snapshotChanges();
  }
}
