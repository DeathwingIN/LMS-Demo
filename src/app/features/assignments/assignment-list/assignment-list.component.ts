import { Component, OnInit, Input } from '@angular/core';
import { AssignmentService } from '../../../core/services/assignment.service';

@Component({
  selector: 'app-assignment-list',
  templateUrl: './assignment-list.component.html',
  styleUrls: ['./assignment-list.component.scss']
})
export class AssignmentListComponent implements OnInit {
  @Input() lessonId!: string; // Definite assignment assertion
  assignments!: any[]; // Definite assignment assertion

  constructor(private assignmentService: AssignmentService) {}

  ngOnInit() {
    this.assignmentService.getAssignments(this.lessonId).subscribe(data => {
      this.assignments = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        };
      });
    });
  }
}
