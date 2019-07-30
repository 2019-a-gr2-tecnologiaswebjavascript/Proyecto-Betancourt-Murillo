import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteSalesComponent } from './route-sales.component';

describe('RouteSalesComponent', () => {
  let component: RouteSalesComponent;
  let fixture: ComponentFixture<RouteSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
