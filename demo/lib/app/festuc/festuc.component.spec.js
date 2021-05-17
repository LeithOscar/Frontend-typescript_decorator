"use strict";

var _testing = require("@angular/core/testing");

var _festuc = require("./festuc.component");

describe('AppComponent', () => {
  beforeEach(async () => {
    await _testing.TestBed.configureTestingModule({
      declarations: [_festuc.FestucComponent]
    }).compileComponents();
  });
  it('should create the app', () => {
    const fixture = _testing.TestBed.createComponent(_festuc.FestucComponent);

    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  it(`should have as title 'decorators demo'`, () => {
    const fixture = _testing.TestBed.createComponent(_festuc.FestucComponent);

    const app = fixture.componentInstance;
    expect(app.title).toEqual('decorators demo');
  });
  it('should render title', () => {
    const fixture = _testing.TestBed.createComponent(_festuc.FestucComponent);

    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('decorators demo');
  });
});