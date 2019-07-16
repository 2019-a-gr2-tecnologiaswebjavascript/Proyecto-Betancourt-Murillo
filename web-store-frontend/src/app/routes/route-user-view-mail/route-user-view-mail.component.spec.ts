import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteUserViewMailComponent } from './route-user-view-mail.component';

describe('RouteUserViewMailComponent', () => {
  let component: RouteUserViewMailComponent;
  let fixture: ComponentFixture<RouteUserViewMailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteUserViewMailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteUserViewMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
