import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubgruposPlanoDeContasComponent } from './subgrupos-plano-de-contas.component';

describe('SubgruposPlanoDeContasComponent', () => {
  let component: SubgruposPlanoDeContasComponent;
  let fixture: ComponentFixture<SubgruposPlanoDeContasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubgruposPlanoDeContasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubgruposPlanoDeContasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
