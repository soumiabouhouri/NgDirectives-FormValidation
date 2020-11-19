import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pageTitle;
  constructor(service: HomeService) {
    this.pageTitle= service.getPageTitle();
  }

  ngOnInit(): void {
  }

}
