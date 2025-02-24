import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataplatComponent } from './dataplat.component';

describe('DataplatComponent', () => {
  let component: DataplatComponent;
  let fixture: ComponentFixture<DataplatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataplatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataplatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
