import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FrontofficeRoutingModule } from './frontoffice-routing.module';
import { HomeComponent } from './home/home.component';

import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseLandingComponent } from './course-landing/course-landing.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [

    HomeComponent,
    CourseDetailsComponent,
    CourseListComponent,
    CourseLandingComponent,
    SignupComponent,
    SigninComponent],
  imports: [
    NgbModule,
    CommonModule,
    FrontofficeRoutingModule
  ]
})
export class FrontofficeModule { }
