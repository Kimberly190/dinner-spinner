import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FoodService {

  getFoods() {
    
    return this.http.get('/assets/food.json');
  }

  constructor(
    private http: HttpClient
  ) { }

}