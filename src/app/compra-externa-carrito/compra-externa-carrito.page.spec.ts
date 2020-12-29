import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompraExternaCarritoPage } from './compra-externa-carrito.page';

describe('CompraExternaCarritoPage', () => {
  let component: CompraExternaCarritoPage;
  let fixture: ComponentFixture<CompraExternaCarritoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraExternaCarritoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompraExternaCarritoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
