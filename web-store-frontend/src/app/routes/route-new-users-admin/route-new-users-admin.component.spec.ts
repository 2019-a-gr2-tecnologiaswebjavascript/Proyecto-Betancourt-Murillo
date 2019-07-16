import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteNewUsersAdminComponent } from './route-new-users-admin.component';

describe('RouteNewUsersAdminComponent', () => {
  let component: RouteNewUsersAdminComponent;
  let fixture: ComponentFixture<RouteNewUsersAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteNewUsersAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteNewUsersAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
