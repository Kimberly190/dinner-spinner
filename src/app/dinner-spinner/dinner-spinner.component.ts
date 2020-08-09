import { Component, OnInit } from '@angular/core';

import { FoodService } from '../food.service';

import { ViewChild } from '@angular/core';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-dinner-spinner',
  templateUrl: './dinner-spinner.component.html',
  styleUrls: ['./dinner-spinner.component.css']
})
export class DinnerSpinnerComponent implements OnInit {

  foods;
  mains;
  selectedMains;
  starches;
  selectedStarches;
  vegetables;

  constructor(
    private foodService: FoodService
  ) { }

  ngOnInit() {
    this.foodService.getFoods().subscribe(
      data => {
        // console.log("got food data:");
        // console.log(data);
        this.foods = data;
        this.mains = this.foods.mains;
        this.selectedMains = this.mains.beef.concat(this.mains.chicken).concat(this.mains.pork).concat(this.mains.fish).concat(this.mains.other);

        this.starches = this.foods.starches;
        this.selectedStarches = this.starches.potato.concat(this.starches.pantry).concat(this.starches.bread);
        this.vegetables = this.foods.vegetables.all;
      },
      error => {
        console.log("error getting food data.");
        console.log(error);
      }
    );
  }

  @ViewChild('main_spinner')
  private mainChild: SpinnerComponent;
  @ViewChild('starch_spinner')
  private starchChild: SpinnerComponent;
  @ViewChild('veg_spinner')
  private vegChild: SpinnerComponent;

  randomize() {
    this.mainChild.spinRight();
    this.starchChild.spinRight();
    this.vegChild.spinRight();
  }
}