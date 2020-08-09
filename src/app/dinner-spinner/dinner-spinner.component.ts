import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

import { FoodService } from '../food.service';

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

    //TODO: angularize this...
  @ViewChild('beef')
  private beefCheckbox: ElementRef;
  @ViewChild('chicken')
  private chickenCheckbox: ElementRef;
  @ViewChild('pork')
  private porkCheckbox: ElementRef;
  @ViewChild('fish')
  private fishCheckbox: ElementRef;
  @ViewChild('other')
  private otherCheckbox: ElementRef;

  onMainChanged() {
      let newMains = [];
      if (this.beefCheckbox.nativeElement.checked) {
        newMains = newMains.concat(this.mains.beef);
      }
      if (this.chickenCheckbox.nativeElement.checked) {
        newMains = newMains.concat(this.mains.chicken);
      }
      if (this.porkCheckbox.nativeElement.checked) {
        newMains = newMains.concat(this.mains.pork);
      }
      if (this.fishCheckbox.nativeElement.checked) {
        newMains = newMains.concat(this.mains.fish);
      }
      if (this.otherCheckbox.nativeElement.checked) {
        newMains = newMains.concat(this.mains.other);
      }

      this.selectedMains = newMains;
  }

  @ViewChild('potato')
  private potatoCheckbox: ElementRef;
  @ViewChild('pantry')
  private pantryCheckbox: ElementRef;
  @ViewChild('bread')
  private breadCheckbox: ElementRef;

  onStarchChanged() {
      let newStarches = [];
      if (this.potatoCheckbox.nativeElement.checked) {
        newStarches = newStarches.concat(this.starches.potato);
      }
      if (this.pantryCheckbox.nativeElement.checked) {
        newStarches = newStarches.concat(this.starches.pantry);
      }
      if (this.breadCheckbox.nativeElement.checked) {
        newStarches = newStarches.concat(this.starches.bread);
      }

      this.selectedStarches = newStarches;
  }
}