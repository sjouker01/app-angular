import { TestBed } from '@angular/core/testing';

import { OpleidingenService } from './opleidingen.service';

describe('OpleidingenService', () => {
  let service: OpleidingenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpleidingenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
