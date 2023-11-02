import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizaAcaoJudicialComponent } from './atualiza-acao-judicial.component';

describe('AtualizaAcaoJudicialComponent', () => {
  let component: AtualizaAcaoJudicialComponent;
  let fixture: ComponentFixture<AtualizaAcaoJudicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizaAcaoJudicialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizaAcaoJudicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
