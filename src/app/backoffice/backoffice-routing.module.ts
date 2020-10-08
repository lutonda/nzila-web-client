import { CoursesStartComponent } from './pages/courses/courses-start/courses-start.component';
import { CoursesDetailsComponent } from './pages/courses/courses-details/courses-details.component';
import { MapsComponent } from './pages/maps/maps.component';
import { IconsComponent } from './pages/icons/icons.component';
import { TablesComponent } from './pages/tables/tables.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '',                       component: DashboardComponent },
  { path: 'dashboard',              component: DashboardComponent },
  { path: 'user-profile',           component: UserProfileComponent },

  { path: 'courses',                component: CoursesStartComponent },
  { path: 'courses/details/:id',    component: CoursesDetailsComponent },
  { path: 'courses',                component: CoursesStartComponent },

  { path: 'icons',          component: IconsComponent },
  { path: 'maps',           component: MapsComponent }
  /*{ path: 'courses',             component: CourseListComponent },
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
export class BackofficeRoutingModule { }
