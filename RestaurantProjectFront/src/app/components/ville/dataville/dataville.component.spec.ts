import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatavilleComponent } from './dataville.component';

describe('DatavilleComponent', () => {
  let component: DatavilleComponent;
  let fixture: ComponentFixture<DatavilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatavilleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatavilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
