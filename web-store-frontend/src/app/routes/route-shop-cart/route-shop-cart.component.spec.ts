import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteShopCartComponent } from './route-shop-cart.component';

describe('RouteShopCartComponent', () => {
  let component: RouteShopCartComponent;
  let fixture: ComponentFixture<RouteShopCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteShopCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteShopCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
