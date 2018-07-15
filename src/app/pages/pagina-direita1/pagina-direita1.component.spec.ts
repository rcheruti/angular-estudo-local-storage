import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaDireita1Component } from './pagina-direita1.component';

describe('PaginaDireita1Component', () => {
  let component: PaginaDireita1Component;
  let fixture: ComponentFixture<PaginaDireita1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaDireita1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaDireita1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
