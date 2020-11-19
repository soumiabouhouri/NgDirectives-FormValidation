import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  getFoodList(){
    return ['pizza', 'Fish', 'melon', 'nuts'];
  }
}
