import { DebugElement } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FestucComponent } from './festuc.component';

describe('AppComponent', () => {

  
  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [
        FestucComponent
      ],
    }).compileComponents();
  });

  describe('component and properties',()=>{
    it('should create the app', () => {
      const fixture = TestBed.createComponent(FestucComponent);
      const app = fixture.componentInstance;
      expect(app).toBeTruthy();
    });

    it(`should have as buyFestuc 'link'`, () => {
      const fixture = TestBed.createComponent(FestucComponent);
      const app = fixture.componentInstance;
      expect(app.buyFestuc).toEqual('https://www.amazon.es/s?k=pistachos&hvadid=80401819697355&hvbmt=bp&hvdev=c&hvqmt=p&tag=bingamazonest-21&ref=pd_sl_hb6wnxihe_p');
    });
  });

  describe('methods',()=>{

    describe('getLiteral',()=>{
      it(`should contains Festuc`, () => {
        const fixture = TestBed.createComponent(FestucComponent);
        const app = fixture.componentInstance;
        expect(app.getLiteral()).toContain("Festuc");
      });
    });

    describe('getDefaultDiscount',()=>{
      it(`should return a number`, () => {
        const fixture = TestBed.createComponent(FestucComponent);
        const app = fixture.componentInstance;
        expect(app.getDefaultDiscount()).toBeDefined();
      });
    });

    describe('UI',()=>{      
        it('should find the <a> with fixture.debugElement.query(By.css) ans show it BUY NOW', () => {
          const text:string='BUY NOW';
          const fixture = TestBed.createComponent(FestucComponent);

          const bannerDe: DebugElement = fixture.debugElement;
          //ahora hacemos la consulta usando un selector css

          const paragraphDe = bannerDe.query(By.css('#buyId'));
          const a: HTMLElement = paragraphDe.nativeElement;
      
          expect(a.textContent).toEqual(text);
        });

        it('src attr <img> of product component', () => {
          const text:string='BUY NOW';
          const fixture = TestBed.createComponent(FestucComponent);
          const bannerDe: DebugElement = fixture.debugElement;

          const paragraphDe = bannerDe.query(By.css('#festucImg'));
          const festucImg: HTMLElement = paragraphDe.nativeElement;
      
          expect(festucImg.attributes[2].value).toEqual("https://img1.etsystatic.com/033/0/6779905/il_570xN.638763697_fz0v.jpg");
        });
    });
  
  });
});
