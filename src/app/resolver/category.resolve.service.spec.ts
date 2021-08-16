import { TestBed } from '@angular/core/testing';

import { Category.ResolveService } from './category.resolve.service';

describe('Category.ResolveService', () => {
  let service: Category.ResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Category.ResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
