import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
import {Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  @Input('likesCount') likesCount: number;
  @Input('isActive') isActive: boolean;


  onClick(){
    this.likesCount+= (this.isActive) ? -1 : +1 ;
    this.isActive= !this.isActive;
  }

}
