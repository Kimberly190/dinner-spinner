import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  @Input() name: string;
  @Input() styleClass: string;
  @Input() items: string[];
  currentIndex: number = 0;

  constructor() { }

  ngOnInit() {
  }

  get currentItem() {
    return this.items[this.currentIndex];
  }

  spinLeft() {
    let ticks = Math.random() * this.items.length + 1;
    while (ticks > 0) {
      this.tickLeft();
      ticks--;
    }
  }

  spinRight() {
    let ticks = Math.random() * this.items.length + 1;
    while (ticks > 0) {
      this.tickRight();
      ticks--;
    }
  }

  tickLeft() {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.items.length - 1;
    }
  }

  tickRight() {
    this.currentIndex++;
    if (this.currentIndex >= this.items.length) {
      this.currentIndex = 0;
    }
  }
}