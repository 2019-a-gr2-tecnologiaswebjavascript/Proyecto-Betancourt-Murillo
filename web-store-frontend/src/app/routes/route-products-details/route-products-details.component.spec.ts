import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteProductsDetailsComponent } from './route-products-details.component';

describe('RouteProductsDetailsComponent', () => {
  let component: RouteProductsDetailsComponent;
  let fixture: ComponentFixture<RouteProductsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteProductsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteProductsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
