import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./shared/components/home/home.component";
import {CourseListComponent} from "./features/courses/course-list/course-list.component";
import {LessonListComponent} from "./features/lessons/lesson-list/lesson-list.component";
import {AssignmentListComponent} from "./features/assignments/assignment-list/assignment-list.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AuthGuard} from "./auth/auth.guard";

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'courses', component: CourseListComponent },
  { path: 'lessons', component: LessonListComponent },
  { path: 'assignments', component: AssignmentListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
