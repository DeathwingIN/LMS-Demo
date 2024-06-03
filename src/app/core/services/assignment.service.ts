import { Injectable } from '@angular/core';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { Assignment } from '../models/assignment.model';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {
  constructor(private firestore: AngularFirestore) {}

  createAssignment(assignment: Assignment) {
    return this.firestore.collection('assignments').add(assignment);
  }

  updateAssignment(assignmentId: string, assignment: Partial<Assignment>) {
    return this.firestore.collection('assignments').doc(assignmentId).update(assignment);
  }

  deleteAssignment(assignmentId: string) {
    return this.firestore.collection('assignments').doc(assignmentId).delete();
  }

  getAssignments(lessonId: string) {
    return this.firestore.collection('assignments', ref => ref.where('lessonId', '==', lessonId)).snapshotChanges();
  }
}
