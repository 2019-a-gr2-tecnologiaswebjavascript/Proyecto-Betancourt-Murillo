import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteNewWarehouseComponent } from './route-new-warehouse.component';

describe('RouteNewWarehouseComponent', () => {
  let component: RouteNewWarehouseComponent;
  let fixture: ComponentFixture<RouteNewWarehouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteNewWarehouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteNewWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
