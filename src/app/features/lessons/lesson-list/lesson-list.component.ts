import { Component, OnInit, Input } from '@angular/core';
import { LessonService } from '../../../core/services/lesson.service';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.scss']
})
export class LessonListComponent implements OnInit {
  @Input() courseId: string | null = null; // Initialize courseId with null

  lessons: any[] = [];

  constructor(private lessonService: LessonService) {}

  ngOnInit() {
    if (this.courseId) { // Check if courseId is provided before making the service call
      this.lessonService.getLessons(this.courseId).subscribe(data => {
        this.lessons = data.map(e => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data() as object // Ensure data is treated as an object
          };
        });
      });
    }
  }
}
