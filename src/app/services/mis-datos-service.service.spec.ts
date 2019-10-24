import { TestBed } from '@angular/core/testing';

import { MisDatosServiceService } from './mis-datos-service.service';

describe('MisDatosServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MisDatosServiceService = TestBed.get(MisDatosServiceService);
    expect(service).toBeTruthy();
  });
});
