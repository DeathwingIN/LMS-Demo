import { Injectable } from '@angular/core';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { Lesson } from '../models/lesson.model';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  constructor(private firestore: AngularFirestore) {}

  createLesson(lesson: Lesson) {
    return this.firestore.collection('lessons').add(lesson);
  }

  updateLesson(lessonId: string, lesson: Partial<Lesson>) {
    return this.firestore.collection('lessons').doc(lessonId).update(lesson);
  }

  deleteLesson(lessonId: string) {
    return this.firestore.collection('lessons').doc(lessonId).delete();
  }

  getLessons(courseId: string) {
    return this.firestore.collection('lessons', ref => ref.where('courseId', '==', courseId)).snapshotChanges();
  }
}
