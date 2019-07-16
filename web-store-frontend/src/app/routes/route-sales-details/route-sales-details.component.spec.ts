import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteSalesDetailsComponent } from './route-sales-details.component';

describe('RouteSalesDetailsComponent', () => {
  let component: RouteSalesDetailsComponent;
  let fixture: ComponentFixture<RouteSalesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteSalesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteSalesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
