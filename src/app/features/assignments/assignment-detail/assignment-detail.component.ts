import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AssignmentService} from "../../../core/services/assignment.service";


@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.scss']
})
export class AssignmentDetailComponent implements OnInit {
  @Input() lessonId: string | null = null;
  assignmentId: string | null = null;
  assignment: any = {
    title: '',
    description: '',
    dueDate: '',
    lessonId: this.lessonId,
    studentSubmissions: []
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private assignmentService: AssignmentService
  ) {}

  ngOnInit(): void {
    this.assignmentId = this.route.snapshot.paramMap.get('id');
    if (this.assignmentId) {
      this.assignmentService.getAssignment(this.assignmentId).subscribe((assignment: any) => {
        this.assignment = assignment.data();
      });
    }
  }

  saveAssignment(): void {
    if (this.assignmentId) {
      this.assignmentService.updateAssignment(this.assignmentId, this.assignment).then(() => {
        this.router.navigate(['/assignments']);
      });
    } else {
      this.assignmentService.addAssignment(this.assignment).then(() => {
        this.router.navigate(['/assignments']);
      });
    }
  }

  deleteAssignment(): void {
    if (this.assignmentId) {
      this.assignmentService.deleteAssignment(this.assignmentId).then(() => {
        this.router.navigate(['/assignments']);
      });
    }
  }

  submitAssignment(studentSubmission: any): void {
    if (this.assignmentId) {
      this.assignmentService.submitAssignment(this.assignmentId, studentSubmission).then(() => {
        console.log('Submission successful');
      });
    }
  }
}
