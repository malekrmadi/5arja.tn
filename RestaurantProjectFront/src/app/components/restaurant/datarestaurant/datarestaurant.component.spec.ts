import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatarestaurantComponent } from './datarestaurant.component';

describe('DatarestaurantComponent', () => {
  let component: DatarestaurantComponent;
  let fixture: ComponentFixture<DatarestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatarestaurantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatarestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
