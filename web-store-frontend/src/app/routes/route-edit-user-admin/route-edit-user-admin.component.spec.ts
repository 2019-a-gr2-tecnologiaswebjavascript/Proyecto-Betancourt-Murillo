import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteEditUserAdminComponent } from './route-edit-user-admin.component';

describe('RouteEditUserAdminComponent', () => {
  let component: RouteEditUserAdminComponent;
  let fixture: ComponentFixture<RouteEditUserAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteEditUserAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteEditUserAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
