import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {LessonService} from "../../../core/services/lesson.service";


@Component({
  selector: 'app-lesson-detail',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.scss']
})
export class LessonDetailComponent implements OnInit {
  @Input() courseId: string | null = null;
  lessonId: string | null = null;
  lesson: any = {
    title: '',
    content: '',
    courseId: this.courseId
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private lessonService: LessonService
  ) {}

  ngOnInit(): void {
    this.lessonId = this.route.snapshot.paramMap.get('id');
    if (this.lessonId) {
      this.lessonService.getLesson(this.lessonId).subscribe((lesson: any) => {
        this.lesson = lesson.data();
      });
    }
  }

  saveLesson(): void {
    if (this.lessonId) {
      this.lessonService.updateLesson(this.lessonId, this.lesson).then(() => {
        this.router.navigate(['/lessons']);
      });
    } else {
      this.lessonService.addLesson(this.lesson).then(() => {
        this.router.navigate(['/lessons']);
      });
    }
  }

  deleteLesson(): void {
    if (this.lessonId) {
      this.lessonService.deleteLesson(this.lessonId).then(() => {
        this.router.navigate(['/lessons']);
      });
    }
  }
}
