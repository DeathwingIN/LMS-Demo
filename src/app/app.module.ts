import {NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {NavbarComponent} from './shared/components/navbar/navbar.component';
import {CourseListComponent} from './features/courses/course-list/course-list.component';
import {CourseDetailComponent} from './features/courses/course-detail/course-detail.component';
import {LessonListComponent} from './features/lessons/lesson-list/lesson-list.component';
import {LessonDetailComponent} from './features/lessons/lesson-detail/lesson-detail.component';
import {AssignmentListComponent} from './features/assignments/assignment-list/assignment-list.component';
import {AssignmentDetailComponent} from './features/assignments/assignment-detail/assignment-detail.component';
import {CoreModule} from './core/core/core.module';
import {SharedModule} from './shared/shared/shared.module';
import {FooterComponent} from './shared/components/footer/footer.component';
import {HomeComponent} from './shared/components/home/home.component';
import {environment} from "../environments/environment";
import { provideHttpClient } from '@angular/common/http';
import { withFetch } from '@angular/common/http';



// Import AngularFire and environment

import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import {FormsModule} from "@angular/forms";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {MatOption} from "@angular/material/autocomplete";
import {MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatSelect, MatSelectModule} from "@angular/material/select";
import {MatCard, MatCardModule} from "@angular/material/card";
import {MatToolbar, MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
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
    StudentComponent,
    TeacherComponent,
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
    MatSlideToggleModule,
    MatOption,
    MatLabel,
    MatFormField,
    MatSelect,
    MatCard,
    MatToolbar,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,





  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
