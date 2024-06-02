import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {
  userId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
  }
}
