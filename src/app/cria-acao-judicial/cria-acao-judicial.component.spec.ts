import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriaAcaoJudicialComponent } from './cria-acao-judicial.component';

describe('CriaAcaoJudicialComponent', () => {
  let component: CriaAcaoJudicialComponent;
  let fixture: ComponentFixture<CriaAcaoJudicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriaAcaoJudicialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriaAcaoJudicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
