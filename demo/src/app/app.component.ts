import { Component } from '@angular/core';
import { Discount } from './discount';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  public title = 'demo';
  public readonly discount = 20;
  private discountToApply: Discount = null;
    constructor() {

      
      this.discountToApply = new Discount(this.discount);

    }

    public getDefaultDiscount(): number {
      return this.discountToApply.getDefaultDiscount;
    }

}
