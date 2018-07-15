import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaDireita2Component } from './pagina-direita2.component';

describe('PaginaDireita2Component', () => {
  let component: PaginaDireita2Component;
  let fixture: ComponentFixture<PaginaDireita2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaDireita2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaDireita2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
