import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCentral2Component } from './pagina-central2.component';

describe('PaginaCentral2Component', () => {
  let component: PaginaCentral2Component;
  let fixture: ComponentFixture<PaginaCentral2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaCentral2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaCentral2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
