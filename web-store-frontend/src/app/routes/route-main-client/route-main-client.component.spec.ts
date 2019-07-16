import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteMainClientComponent } from './route-main-client.component';

describe('RouteMainClientComponent', () => {
  let component: RouteMainClientComponent;
  let fixture: ComponentFixture<RouteMainClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteMainClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteMainClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
