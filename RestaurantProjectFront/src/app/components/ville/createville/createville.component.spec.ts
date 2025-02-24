import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatevilleComponent } from './createville.component';

describe('CreatevilleComponent', () => {
  let component: CreatevilleComponent;
  let fixture: ComponentFixture<CreatevilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatevilleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatevilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
