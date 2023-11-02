import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtemAcaoJudicialPorDocumentoComponent } from './obtem-acao-judicial-por-documento.component';

describe('ObtemAcaoJudicialPorDocumentoComponent', () => {
  let component: ObtemAcaoJudicialPorDocumentoComponent;
  let fixture: ComponentFixture<ObtemAcaoJudicialPorDocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObtemAcaoJudicialPorDocumentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObtemAcaoJudicialPorDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
