import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DinnerSpinnerComponent } from './dinner-spinner/dinner-spinner.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { FoodService } from './food.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: DinnerSpinnerComponent }
    ]) ],
  declarations: [ AppComponent, DinnerSpinnerComponent, SpinnerComponent ],
  bootstrap:    [ AppComponent ],
  providers: [FoodService]
})
export class AppModule { }
