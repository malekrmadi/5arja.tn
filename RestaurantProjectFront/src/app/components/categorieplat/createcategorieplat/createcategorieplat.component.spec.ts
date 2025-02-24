import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecategorieplatComponent } from './createcategorieplat.component';

describe('CreatecategorieplatComponent', () => {
  let component: CreatecategorieplatComponent;
  let fixture: ComponentFixture<CreatecategorieplatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatecategorieplatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatecategorieplatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
