import { TestBed } from '@angular/core/testing';

import { EditorialRailService } from './editorial-rail.service';

describe('EditorialRailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditorialRailService = TestBed.get(EditorialRailService);
    expect(service).toBeTruthy();
  });
});
