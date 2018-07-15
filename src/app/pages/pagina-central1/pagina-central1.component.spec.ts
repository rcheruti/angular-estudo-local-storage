import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCentral1Component } from './pagina-central1.component';

describe('PaginaCentral1Component', () => {
  let component: PaginaCentral1Component;
  let fixture: ComponentFixture<PaginaCentral1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaCentral1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaCentral1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
