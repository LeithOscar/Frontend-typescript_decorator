import { Component } from '@angular/core';

import { Discount } from '../discount';

@Component({
  selector: 'festuc-root',
  templateUrl: './festuc.component.html'
})

export class FestucComponent {
    
  private discountToApply: Discount = null;
  private readonly product:string = 'Festuc ';

  public cupon: string = '';
  public readonly discount = 20;
  public readonly buyFestuc: string = 'https://www.amazon.es/s?k=pistachos&hvadid=80401819697355&hvbmt=bp&hvdev=c&hvqmt=p&tag=bingamazonest-21&ref=pd_sl_hb6wnxihe_p';
  public hasValidCupon: boolean = false;

  constructor() {    
      this.discountToApply = new Discount(this.discount);
    }

    public getDefaultDiscount(): number {
      return this.discountToApply.getDefaultDiscount;
    }

    public getLiteral(): string{
     return this.product + this.discountToApply.getLiteral();
    }
    
    public applyCupon():void{
       this.hasValidCupon = this.discountToApply.isValidCupon(this.cupon);
    }
}
