import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private firestore: AngularFirestore) {}

  getCourses(): Observable<any> {
    return this.firestore.collection('courses').snapshotChanges();
  }

  getCourse(courseId: string): Observable<any> {
    return this.firestore.collection('courses').doc(courseId).get();
  }

  addCourse(course: any): Promise<any> {
    return this.firestore.collection('courses').add(course);
  }

  updateCourse(courseId: string, course: any): Promise<void> {
    return this.firestore.collection('courses').doc(courseId).update(course);
  }

  deleteCourse(courseId: string): Promise<void> {
    return this.firestore.collection('courses').doc(courseId).delete();
  }
}
