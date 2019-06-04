import { TestBed } from '@angular/core/testing';

import { EditorialPageService } from './editorial-page.service';

describe('EditorialPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditorialPageService = TestBed.get(EditorialPageService);
    expect(service).toBeTruthy();
  });
});
