import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CartClientPage } from './cart-client.page';

describe('CartClientPage', () => {
  let component: CartClientPage;
  let fixture: ComponentFixture<CartClientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartClientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CartClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
