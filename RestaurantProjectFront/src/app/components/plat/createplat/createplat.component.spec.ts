import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateplatComponent } from './createplat.component';

describe('CreateplatComponent', () => {
  let component: CreateplatComponent;
  let fixture: ComponentFixture<CreateplatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateplatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateplatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
