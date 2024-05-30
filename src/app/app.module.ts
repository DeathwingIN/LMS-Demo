import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './Home/home/home.component';
import { LoginComponent } from './Home/auth/login/login.component';
import { RegisterComponent } from './Home/auth/register/register.component';
import { NavbarComponent } from './Home/shared/components/navbar/navbar.component';
import { CourseListComponent } from './Home/features/courses/course-list/course-list.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    CourseListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
