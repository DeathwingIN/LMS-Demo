import { Component, OnInit, Input } from '@angular/core';
import {AssignmentService} from "../../../core/services/assignment.service";


@Component({
  selector: 'app-assignment-list',
  templateUrl: './assignment-list.component.html',
  styleUrls: ['./assignment-list.component.scss']
})
export class AssignmentListComponent implements OnInit {
  @Input() lessonId: string | null = null;
  assignments: any[] = [];

  constructor(private assignmentService: AssignmentService) {}

  ngOnInit(): void {
    if (this.lessonId) {
      this.assignmentService.getAssignments(this.lessonId).subscribe((data: any) => {
        this.assignments = data.map((e: any) => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data()
          };
        });
      });
    }
  }
}
