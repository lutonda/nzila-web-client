import { ComponentsModule } from './components/components.module';
import { ClipboardModule } from 'ngx-clipboard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MapsComponent } from './pages/maps/maps.component';
import { IconsComponent } from './pages/icons/icons.component';
import { TablesComponent } from './pages/tables/tables.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BackofficeComponent } from './backoffice.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackofficeRoutingModule } from './backoffice-routing.module';
import { CoursesListComponent } from './pages/courses/courses-list/courses-list.component';
import { CoursesStartComponent } from './pages/courses/courses-start/courses-start.component';
import { CoursesCreateComponent } from './pages/courses/courses-create/courses-create.component';
import { CoursesDetailsComponent } from './pages/courses/courses-details/courses-details.component';
import { ChapterBarComponent } from './components/chapter-bar/chapter-bar.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { TaskDetailsComponent } from './pages/tasks/task-details/task-details.component';
import { TaskListComponent } from './pages/tasks/task-list/task-list.component';
import { AutofocusDirective } from './directives/autofocus.directive';
import { CoursesPeopleComponent } from './pages/courses/components/courses-people/courses-people.component';
import { CoursesModuleComponent } from './pages/courses/components/courses-module/courses-module.component';
import { CoursesBlogComponent } from './pages/courses/components/courses-blog/courses-blog.component';
import { CoursesSheduleComponent } from './pages/courses/components/courses-shedule/courses-shedule.component';
import { AssociationCreateComponent } from './pages/associations/association-create/association-create.component';
import { ChapterCreateComponent } from './pages/chapters/chapter-create/chapter-create.component';


@NgModule({
  declarations: [BackofficeComponent,

    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    CoursesListComponent,
    CoursesStartComponent,
    CoursesCreateComponent,
    CoursesDetailsComponent,
    ChapterBarComponent,
    TaskDetailsComponent,
    TaskListComponent,
    AutofocusDirective,
    CoursesPeopleComponent,
    CoursesModuleComponent,
    CoursesBlogComponent,
    CoursesSheduleComponent,
    AssociationCreateComponent,
    ChapterCreateComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    BackofficeRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ComponentsModule,

    CKEditorModule,
  ],
  exports: [
    BackofficeComponent
  ]
})
export class BackofficeModule { }
