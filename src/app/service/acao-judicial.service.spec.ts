import { TestBed } from '@angular/core/testing';

import { AcaoJudicialService } from './acao-judicial.service';

describe('AcaoJudicialService', () => {
  let service: AcaoJudicialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcaoJudicialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
