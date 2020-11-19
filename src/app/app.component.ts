import {Component} from '@angular/core';
import { LikeComponent } from './like/like.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'untitled2';
  tweet ={
      body: 'hello',
      likesCount: 10,
      isLiked: true
  }

}
