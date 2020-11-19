import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  authors= [
    {id:1, name: 'autho01'},
    {id:2, name: 'autho02'},
    {id:3, name: 'autho03'}
  ];
  // after creating the service we register it as a provider then we injected in the ctor
  getAuthors(){
    return this.authors;
  }
  AddAuthor(){
    this.authors.push({id: 3, name: 'autho03'});
  }
}
