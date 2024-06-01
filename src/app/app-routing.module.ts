import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./shared/components/home/home.component";
import { CourseListComponent } from "./features/courses/course-list/course-list.component";
import { LessonListComponent } from "./features/lessons/lesson-list/lesson-list.component";
import { AssignmentListComponent } from "./features/assignments/assignment-list/assignment-list.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { AuthGuard } from './auth/auth.guard';
import {StudentComponent} from "./student/student.component";
import {TeacherComponent} from "./teacher/teacher.component";
import {AssignmentDetailComponent} from "./features/assignments/assignment-detail/assignment-detail.component";
import {CourseDetailComponent} from "./features/courses/course-detail/course-detail.component";
import {LessonDetailComponent} from "./features/lessons/lesson-detail/lesson-detail.component"; // Import the AuthGuard

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'courses', component: CourseListComponent },
  { path: 'courses/:id', component: CourseDetailComponent },
  { path: 'lessons/:courseId', component: LessonListComponent },
  { path: 'lessons/:courseId/:id', component: LessonDetailComponent },
  { path: 'assignments/:lessonId', component: AssignmentListComponent },
  { path: 'assignments/:lessonId/:id', component: AssignmentDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'student', component: StudentComponent, canActivate: [AuthGuard] },
  { path: 'teacher', component: TeacherComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
