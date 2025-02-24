import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatagouvernoratComponent } from './datagouvernorat.component';

describe('DatagouvernoratComponent', () => {
  let component: DatagouvernoratComponent;
  let fixture: ComponentFixture<DatagouvernoratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatagouvernoratComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatagouvernoratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
