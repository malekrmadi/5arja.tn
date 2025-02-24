import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatacategorieplatComponent } from './datacategorieplat.component';

describe('DatacategorieplatComponent', () => {
  let component: DatacategorieplatComponent;
  let fixture: ComponentFixture<DatacategorieplatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatacategorieplatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatacategorieplatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
