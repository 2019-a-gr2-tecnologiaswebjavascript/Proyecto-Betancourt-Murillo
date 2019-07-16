import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteNewOrderComponent } from './route-new-order.component';

describe('RouteNewOrderComponent', () => {
  let component: RouteNewOrderComponent;
  let fixture: ComponentFixture<RouteNewOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteNewOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteNewOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
