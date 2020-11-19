import {Component, OnInit} from '@angular/core';
import {AuthorService} from './author.service';
import {Input} from '@angular/core';
import {Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  authors;
  @Output() notify = new EventEmitter();

  constructor(service: AuthorService) {
    this.authors = service.getAuthors();
  }

  onSave($event) {
    alert('hello' + $event);
    this.notify.emit();
  }
  AddObject(){
    this.authors.push({id: 3, name: 'autho03'});
  }
  RemoveObject(author) {
    let index=  this.authors.indexOf(author);
    this.authors.splice(index,1);
  }
  UpdateObject(author) {
    author.name='Hi hello';
  }

  onKeyUp() {
    alert('ghhhhh' + this.authors);
  }

  ngOnInit(): void {
  }


}
