import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCompras } from './lista-compras';

describe('ListaCompras', () => {
  let component: ListaCompras;
  let fixture: ComponentFixture<ListaCompras>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaCompras]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCompras);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
