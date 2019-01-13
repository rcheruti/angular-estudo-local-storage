import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPopmotionComponent } from './pagina-popmotion.component';

describe('PaginaPopmotionComponent', () => {
  let component: PaginaPopmotionComponent;
  let fixture: ComponentFixture<PaginaPopmotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaPopmotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaPopmotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
