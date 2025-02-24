import { TestBed } from '@angular/core/testing';

import { CategorieplatService } from './categorieplat.service';

describe('CategorieplatService', () => {
  let service: CategorieplatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategorieplatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
