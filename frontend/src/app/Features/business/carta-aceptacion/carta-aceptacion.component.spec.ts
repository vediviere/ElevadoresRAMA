import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaAceptacionComponent } from './carta-aceptacion.component';

describe('CartaAceptacionComponent', () => {
  let component: CartaAceptacionComponent;
  let fixture: ComponentFixture<CartaAceptacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartaAceptacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartaAceptacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
