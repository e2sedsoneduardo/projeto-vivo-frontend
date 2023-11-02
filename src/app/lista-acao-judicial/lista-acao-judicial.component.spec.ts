import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAcaoJudicialComponent } from './lista-acao-judicial.component';

describe('ListaAcaoJudicialComponent', () => {
  let component: ListaAcaoJudicialComponent;
  let fixture: ComponentFixture<ListaAcaoJudicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAcaoJudicialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaAcaoJudicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
