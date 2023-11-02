import { TestBed } from '@angular/core/testing';

import { StatusPessoaService } from './status-pessoa.service';

describe('StatusPessoaService', () => {
  let service: StatusPessoaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatusPessoaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
