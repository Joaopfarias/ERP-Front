import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyuserPrazosContratosComponent } from './keyuser-prazos-contratos.component';

describe('KeyuserPrazosContratosComponent', () => {
  let component: KeyuserPrazosContratosComponent;
  let fixture: ComponentFixture<KeyuserPrazosContratosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyuserPrazosContratosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyuserPrazosContratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
