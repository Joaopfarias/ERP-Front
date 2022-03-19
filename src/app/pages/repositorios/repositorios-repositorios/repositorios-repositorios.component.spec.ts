import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoriosRepositoriosComponent } from './repositorios-repositorios.component';

describe('RepositoriosRepositoriosComponent', () => {
  let component: RepositoriosRepositoriosComponent;
  let fixture: ComponentFixture<RepositoriosRepositoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepositoriosRepositoriosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoriosRepositoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
