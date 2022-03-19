import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyuserFolhasComponent } from './keyuser-folhas.component';

describe('KeyuserFolhasComponent', () => {
  let component: KeyuserFolhasComponent;
  let fixture: ComponentFixture<KeyuserFolhasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyuserFolhasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyuserFolhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
