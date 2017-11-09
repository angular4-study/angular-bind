import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwobindComponent } from './twobind.component';

describe('TwobindComponent', () => {
  let component: TwobindComponent;
  let fixture: ComponentFixture<TwobindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwobindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwobindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
