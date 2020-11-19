import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {LikeComponent} from './like/like.component';
import {AuthorComponent} from './author/author.component';
import {AuthorService} from './author/author.service';
import {FoodComponent} from './food/food.component';
import {FoodService} from './food/food.service';
import {CourseComponent} from './course/course.component';
import {CourseService} from './course/course.service';
import {TweetLikeComponent} from './tweet-like/tweet-like.component';
import {HomeComponent} from './home/home.component';
import {HomeService} from './home/home.service';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';


@NgModule({
  declarations: [
    AppComponent,
    LikeComponent,
    AuthorComponent,
    FoodComponent,
    CourseComponent,
    TweetLikeComponent,
    HomeComponent,
    ZippyComponent,
    ContactFormComponent,
    DropDownComponent,
    NewCourseFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    AuthorService,
    FoodService,
    CourseService,
    HomeService

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
