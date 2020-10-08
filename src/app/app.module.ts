import { BackofficeModule } from './backoffice/backoffice.module';
import { FrontofficeModule } from './frontoffice/frontoffice.module';
import { UserService } from './services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';

import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { MsalModule, MsalInterceptor } from '@azure/msal-angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ListCourseComponent } from './courses/list-course/list-course.component';
import { DetailCourseComponent } from './courses/detail-course/detail-course.component';
import { LandingCourseComponent } from './courses/landing-course/landing-course.component';
import { ParallaxDirective } from './frontoffice/components/parallax.directive';

const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    LoginComponent,
    ListCourseComponent,
    DetailCourseComponent,
    LandingCourseComponent,
    ParallaxDirective
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    FrontofficeModule,
    BackofficeModule,
    MsalModule.forRoot({
      auth: {
        clientId: '69446787-f523-4cf3-b858-e382c4587278', // This is your client ID
        authority: 'https://login.microsoftonline.com/9f4511c9-095c-4d95-b631-67b721f35e07', // This is your tenant ID
        redirectUri:  'https://localhost:4300/auth/callback'// This is your redirect URI,
      },
      cache: {
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: isIE, // Set to true for Internet Explorer 11
      },
    }, {
      popUp: !isIE,
      consentScopes: [
        'user.read',
        'openid',
        'profile',
      ],
      unprotectedResources: [],
      protectedResourceMap: [
        ['https://graph.microsoft.com/v1.0/me', ['user.read']]
      ],
      extraQueryParameters: {}
    })
  ],
  providers: [UserService,
    { provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
