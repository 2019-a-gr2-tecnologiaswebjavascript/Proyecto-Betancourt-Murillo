import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteWarehouseContentComponent } from './route-warehouse-content.component';

describe('RouteWarehouseContentComponent', () => {
  let component: RouteWarehouseContentComponent;
  let fixture: ComponentFixture<RouteWarehouseContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteWarehouseContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteWarehouseContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
