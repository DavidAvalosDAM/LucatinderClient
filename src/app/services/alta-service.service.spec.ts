import { TestBed } from '@angular/core/testing';

import { altaService } from './altaService';

describe('UsuarioServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: altaService = TestBed.get(altaService);
    expect(service).toBeTruthy();
  });
});
