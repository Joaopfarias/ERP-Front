import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaisCobrancaComponent } from './locais-cobranca.component';

describe('LocaisCobrancaComponent', () => {
  let component: LocaisCobrancaComponent;
  let fixture: ComponentFixture<LocaisCobrancaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocaisCobrancaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocaisCobrancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
