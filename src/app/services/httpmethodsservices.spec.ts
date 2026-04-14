import { TestBed } from '@angular/core/testing';

import { Httpmethodsservices } from './httpmethodsservices';

describe('Httpmethodsservices', () => {
  let service: Httpmethodsservices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Httpmethodsservices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
