import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteUsersAdminComponent } from './route-users-admin.component';

describe('RouteUsersAdminComponent', () => {
  let component: RouteUsersAdminComponent;
  let fixture: ComponentFixture<RouteUsersAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteUsersAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteUsersAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
