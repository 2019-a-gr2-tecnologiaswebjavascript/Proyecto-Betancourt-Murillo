import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteUserViewPassComponent } from './route-user-view-pass.component';

describe('RouteUserViewPassComponent', () => {
  let component: RouteUserViewPassComponent;
  let fixture: ComponentFixture<RouteUserViewPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteUserViewPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteUserViewPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
