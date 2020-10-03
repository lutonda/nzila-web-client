import { FrontofficeModule } from './frontoffice/frontoffice.module';
import { DetailCourseComponent } from './courses/detail-course/detail-course.component';
import { ListCourseComponent } from './courses/list-course/list-course.component';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';

const routes: Routes =[
  { path: '', loadChildren: () => import('./frontoffice/frontoffice.module').then(m => m.FrontofficeModule) }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
