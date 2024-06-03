import { Component, OnInit, Input } from '@angular/core';
import { AssignmentService } from '../../../core/services/assignment.service';

@Component({
  selector: 'app-assignment-list',
  templateUrl: './assignment-list.component.html',
  styleUrls: ['./assignment-list.component.css']
})
export class AssignmentListComponent implements OnInit {
  @Input() lessonId: string;
  assignments: any[];

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
