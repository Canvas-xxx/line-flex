import { TestBed } from '@angular/core/testing';

import { ValidateFlexService } from './validate-flex.service';

describe('ValidateFlexService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidateFlexService = TestBed.get(ValidateFlexService);
    expect(service).toBeTruthy();
  });
});
