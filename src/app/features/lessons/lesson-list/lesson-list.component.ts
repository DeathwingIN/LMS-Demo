import { Component, OnInit, Input } from '@angular/core';
import {LessonService} from "../../../core/services/lesson.service";

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.scss']
})
export class LessonListComponent implements OnInit {
  @Input() courseId: string | null = null;
  lessons: any[] = [];

  constructor(private lessonService: LessonService) {}

  ngOnInit(): void {
    if (this.courseId) {
      this.lessonService.getLessons(this.courseId).subscribe((data: any) => {
        this.lessons = data.map((e: any) => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data()
          };
        });
      });
    }
  }
}
