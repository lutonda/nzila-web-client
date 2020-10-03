import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseListComponent } from './course-list/course-list.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseLandingComponent } from './course-landing/course-landing.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',             component: HomeComponent },
  { path: 'courses',             component: CourseListComponent },
  { path: 'courses/:id',             component: CourseDetailsComponent },
  { path: 'courses/landing/:id',             component: CourseLandingComponent }
  //{ path: 'home',             component: LandingComponent },
  /* { path: 'user-profile',     component: ProfileComponent },
   { path: 'register',           component: SignupComponent },
   { path: 'landing',          component: HomeComponent },
   { path: 'login',          component: LoginComponent },
   { path: 'auth/callback',          component: LoginComponent },
   


   { path: 'courses',             component: ListCourseComponent },
   { path: 'courses/:id',             component: DetailCourseComponent },
   { path: 'courses/landing/:id',             component: LandingComponent },*/
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontofficeRoutingModule { }
