import { Component } from '@angular/core';
import { Discount } from './discount';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class FestucComponent {
  public title = 'demo';
  public readonly discount = 20;
  private discountToApply: Discount = null;

    constructor() {

      
      this.discountToApply = new Discount(this.discount);

    }

    public getDefaultDiscount(): number {
      return this.discountToApply.getDefaultDiscount;
    }

    public getLiteral(): string{
     return this.discountToApply.getLiteral();
    }
   

}
