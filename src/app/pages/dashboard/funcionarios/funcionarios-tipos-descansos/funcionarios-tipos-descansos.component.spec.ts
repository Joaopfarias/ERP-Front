import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionariosTiposDescansosComponent } from './funcionarios-tipos-descansos.component';

describe('FuncionariosTiposDescansosComponent', () => {
  let component: FuncionariosTiposDescansosComponent;
  let fixture: ComponentFixture<FuncionariosTiposDescansosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionariosTiposDescansosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionariosTiposDescansosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
