import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteWarehouseComponent } from './route-warehouse.component';

describe('RouteWarehouseComponent', () => {
  let component: RouteWarehouseComponent;
  let fixture: ComponentFixture<RouteWarehouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteWarehouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
