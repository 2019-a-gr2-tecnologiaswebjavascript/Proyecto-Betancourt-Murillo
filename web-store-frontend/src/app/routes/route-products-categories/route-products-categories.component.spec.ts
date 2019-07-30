import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteProductsCategoriesComponent } from './route-products-categories.component';

describe('RouteProductsCategoriesComponent', () => {
  let component: RouteProductsCategoriesComponent;
  let fixture: ComponentFixture<RouteProductsCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteProductsCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteProductsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
