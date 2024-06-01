import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor(private firestore: AngularFirestore) {}

  getLessons(courseId: string): Observable<any> {
    return this.firestore.collection('lessons', ref => ref.where('courseId', '==', courseId)).snapshotChanges();
  }

  getLesson(lessonId: string): Observable<any> {
    return this.firestore.collection('lessons').doc(lessonId).get();
  }

  addLesson(lesson: any): Promise<any> {
    return this.firestore.collection('lessons').add(lesson);
  }

  updateLesson(lessonId: string, lesson: any): Promise<void> {
    return this.firestore.collection('lessons').doc(lessonId).update(lesson);
  }

  deleteLesson(lessonId: string): Promise<void> {
    return this.firestore.collection('lessons').doc(lessonId).delete();
  }
}
