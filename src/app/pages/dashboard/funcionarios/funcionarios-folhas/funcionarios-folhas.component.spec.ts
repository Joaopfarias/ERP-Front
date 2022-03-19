import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionariosFolhasComponent } from './funcionarios-folhas.component';

describe('FuncionariosFolhasComponent', () => {
  let component: FuncionariosFolhasComponent;
  let fixture: ComponentFixture<FuncionariosFolhasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionariosFolhasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionariosFolhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
