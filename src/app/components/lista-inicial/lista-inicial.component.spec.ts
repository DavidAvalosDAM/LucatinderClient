import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaInicialComponent } from './lista-inicial.component';

describe('ListaInicialComponent', () => {
  let component: ListaInicialComponent;
  let fixture: ComponentFixture<ListaInicialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaInicialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
