import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteAcquisitionOrdersComponent } from './route-acquisition-orders.component';

describe('RouteAcquisitionOrdersComponent', () => {
  let component: RouteAcquisitionOrdersComponent;
  let fixture: ComponentFixture<RouteAcquisitionOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteAcquisitionOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteAcquisitionOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
