import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  getPageTitle(){
    return "Welcome To Home"
  }
}
