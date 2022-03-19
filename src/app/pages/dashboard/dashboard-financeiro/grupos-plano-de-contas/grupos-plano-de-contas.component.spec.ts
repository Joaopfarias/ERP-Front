import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GruposPlanoDeContasComponent } from './grupos-plano-de-contas.component';

describe('GruposPlanoDeContasComponent', () => {
  let component: GruposPlanoDeContasComponent;
  let fixture: ComponentFixture<GruposPlanoDeContasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GruposPlanoDeContasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GruposPlanoDeContasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
