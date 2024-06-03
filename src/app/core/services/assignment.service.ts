// assignment.service.ts
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'; // Import AngularFirestore
import { Observable } from 'rxjs';
import { Assignment } from '../models/assignment.model';
import { Lesson } from '../models/lesson.model';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {
  constructor(private firestore: AngularFirestore) {}

  createAssignment(assignment: Assignment): Promise<any> {
    return this.firestore.collection('assignments').add(assignment);
  }

  updateAssignment(assignmentId: string, assignment: Partial<Assignment>): Promise<void> {
    return this.firestore.collection('assignments').doc(assignmentId).update(assignment);
  }

  deleteAssignment(assignmentId: string): Promise<void> {
    return this.firestore.collection('assignments').doc(assignmentId).delete();
  }

  getAssignments(lessonId: string): Observable<any[]> {
    return this.firestore.collection('assignments', ref => ref.where('lessonId', '==', lessonId)).valueChanges();
  }
}
