import { TestBed } from '@angular/core/testing';

import { ContactarService } from './contactar.service';

describe('ContactarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactarService = TestBed.get(ContactarService);
    expect(service).toBeTruthy();
  });
});
