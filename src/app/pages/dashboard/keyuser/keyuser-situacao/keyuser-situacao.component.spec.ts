import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyuserSituacaoComponent } from './keyuser-situacao.component';

describe('KeyuserSituacaoComponent', () => {
  let component: KeyuserSituacaoComponent;
  let fixture: ComponentFixture<KeyuserSituacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyuserSituacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyuserSituacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
