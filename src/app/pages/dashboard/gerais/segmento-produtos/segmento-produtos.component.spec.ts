import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentoProdutosComponent } from './segmento-produtos.component';

describe('SegmentoProdutosComponent', () => {
  let component: SegmentoProdutosComponent;
  let fixture: ComponentFixture<SegmentoProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegmentoProdutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentoProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
