import { TestBed } from '@angular/core/testing';

import { OpleidingService } from './opleiding.service';

describe('OpleidingService', () => {
  let service: OpleidingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpleidingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
