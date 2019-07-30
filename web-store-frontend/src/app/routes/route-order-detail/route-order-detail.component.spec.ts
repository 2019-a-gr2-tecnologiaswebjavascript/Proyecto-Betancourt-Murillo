import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteOrderDetailComponent } from './route-order-detail.component';

describe('RouteOrderDetailComponent', () => {
  let component: RouteOrderDetailComponent;
  let fixture: ComponentFixture<RouteOrderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteOrderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
