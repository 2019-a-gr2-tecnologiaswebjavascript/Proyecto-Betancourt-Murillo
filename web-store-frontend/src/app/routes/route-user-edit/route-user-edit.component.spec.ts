import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteUserEditComponent } from './route-user-edit.component';

describe('RouteUserEditComponent', () => {
  let component: RouteUserEditComponent;
  let fixture: ComponentFixture<RouteUserEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteUserEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteUserEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
