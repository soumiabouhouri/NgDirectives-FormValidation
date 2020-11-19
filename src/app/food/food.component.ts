import { Component, OnInit } from '@angular/core';
import {FoodService} from './food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  food;
  constructor(service: FoodService) {
    this.food = service.getFoodList();
  }

  ngOnInit(): void {
  }

}
