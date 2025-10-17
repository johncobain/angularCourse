import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaPagina } from './minha-pagina';

describe('MinhaPagina', () => {
  let component: MinhaPagina;
  let fixture: ComponentFixture<MinhaPagina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinhaPagina]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinhaPagina);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
