import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyuserDesligamentosComponent } from './keyuser-desligamentos.component';

describe('KeyuserDesligamentosComponent', () => {
  let component: KeyuserDesligamentosComponent;
  let fixture: ComponentFixture<KeyuserDesligamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyuserDesligamentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyuserDesligamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
