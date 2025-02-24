import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreategouvernoratComponent } from './creategouvernorat.component';

describe('CreategouvernoratComponent', () => {
  let component: CreategouvernoratComponent;
  let fixture: ComponentFixture<CreategouvernoratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreategouvernoratComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreategouvernoratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
