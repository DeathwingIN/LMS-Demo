import { Component, OnInit, Input } from '@angular/core';
import { LessonService } from '../../../core/services/lesson.service';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css']
})
export class LessonListComponent implements OnInit {
  @Input() courseId: string;
  lessons: any[];

  constructor(private lessonService: LessonService) {}

  ngOnInit() {
    this.lessonService.getLessons(this.courseId).subscribe(data => {
      this.lessons = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        };
      });
    });
  }
}
