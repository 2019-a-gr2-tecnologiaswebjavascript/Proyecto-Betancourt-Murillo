import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteMainAdminComponent } from './route-main-admin.component';

describe('RouteMainAdminComponent', () => {
  let component: RouteMainAdminComponent;
  let fixture: ComponentFixture<RouteMainAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteMainAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteMainAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
