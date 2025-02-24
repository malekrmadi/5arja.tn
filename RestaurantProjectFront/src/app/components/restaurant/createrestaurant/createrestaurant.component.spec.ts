import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaterestaurantComponent } from './createrestaurant.component';

describe('CreaterestaurantComponent', () => {
  let component: CreaterestaurantComponent;
  let fixture: ComponentFixture<CreaterestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaterestaurantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreaterestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
