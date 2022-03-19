import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilAprovacaoComponent } from './perfil-aprovacao.component';

describe('PerfilAprovacaoComponent', () => {
  let component: PerfilAprovacaoComponent;
  let fixture: ComponentFixture<PerfilAprovacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilAprovacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilAprovacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
