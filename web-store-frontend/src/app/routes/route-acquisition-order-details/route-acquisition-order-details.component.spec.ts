import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteAcquisitionOrderDetailsComponent } from './route-acquisition-order-details.component';

describe('RouteAcquisitionOrderDetailsComponent', () => {
  let component: RouteAcquisitionOrderDetailsComponent;
  let fixture: ComponentFixture<RouteAcquisitionOrderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteAcquisitionOrderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteAcquisitionOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
