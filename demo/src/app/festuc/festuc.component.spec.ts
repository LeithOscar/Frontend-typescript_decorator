import { TestBed } from '@angular/core/testing';
import { FestucComponent } from './festuc.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        FestucComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(FestucComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'decorators demo'`, () => {
    const fixture = TestBed.createComponent(FestucComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('decorators demo');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(FestucComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('decorators demo');
  });

});
