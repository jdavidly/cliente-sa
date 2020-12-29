import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompraLocalCarritoPage } from './compra-local-carrito.page';

describe('CompraLocalCarritoPage', () => {
  let component: CompraLocalCarritoPage;
  let fixture: ComponentFixture<CompraLocalCarritoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraLocalCarritoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompraLocalCarritoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
