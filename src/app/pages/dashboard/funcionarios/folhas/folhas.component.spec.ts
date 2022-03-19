import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolhasComponent } from './folhas.component';

describe('FolhasComponent', () => {
  let component: FolhasComponent;
  let fixture: ComponentFixture<FolhasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolhasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FolhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
