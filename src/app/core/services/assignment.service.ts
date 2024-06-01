import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { arrayUnion } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  constructor(private firestore: AngularFirestore) {}

  getAssignments(lessonId: string): Observable<any> {
    return this.firestore.collection('assignments', ref => ref.where('lessonId', '==', lessonId)).snapshotChanges();
  }

  getAssignment(assignmentId: string): Observable<any> {
    return this.firestore.collection('assignments').doc(assignmentId).get();
  }

  addAssignment(assignment: any): Promise<any> {
    return this.firestore.collection('assignments').add(assignment);
  }

  updateAssignment(assignmentId: string, assignment: any): Promise<void> {
    return this.firestore.collection('assignments').doc(assignmentId).update(assignment);
  }

  deleteAssignment(assignmentId: string): Promise<void> {
    return this.firestore.collection('assignments').doc(assignmentId).delete();
  }

  submitAssignment(assignmentId: string, studentSubmission: any): Promise<void> {
    return this.firestore.collection('assignments').doc(assignmentId).update({
      studentSubmissions: arrayUnion(studentSubmission)
    });
  }
}
