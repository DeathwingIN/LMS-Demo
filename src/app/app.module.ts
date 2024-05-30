import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { CourseListComponent } from './features/courses/course-list/course-list.component';
import { CourseDetailComponent } from './features/courses/course-detail/course-detail.component';
import { LessonListComponent } from './features/lessons/lesson-list/lesson-list.component';
import { LessonDetailComponent } from './features/lessons/lesson-detail/lesson-detail.component';
import { AssignmentListComponent } from './features/assignments/assignment-list/assignment-list.component';
import { AssignmentDetailComponent } from './features/assignments/assignment-detail/assignment-detail.component';
import { CoreModule } from './core/core/core.module';
import { SharedModule } from './shared/shared/shared.module';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './shared/components/home/home.component';
import {environment} from "../environments/environment";


// Import AngularFire and environment
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import {FormsModule} from "@angular/forms";
import { DashboardComponent } from './dashboard/dashboard.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    CourseListComponent,
    CourseDetailComponent,
    LessonListComponent,
    LessonDetailComponent,
    AssignmentListComponent,
    AssignmentDetailComponent,
    FooterComponent,
    HomeComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,


  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
