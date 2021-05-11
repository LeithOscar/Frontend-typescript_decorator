import { Component } from '@angular/core';
import { Discount } from '../discount';

@Component({
  selector: 'app-root',
  templateUrl: './festuc.component.html'
})

export class FestucComponent {
  public title = 'demo';
  public readonly discount = 20;
  private discountToApply: Discount = null;


  public buyFestuc: string = 'https://www.amazon.es/s?k=pistachos&hvadid=80401819697355&hvbmt=bp&hvdev=c&hvqmt=p&tag=bingamazonest-21&ref=pd_sl_hb6wnxihe_p';
  

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
