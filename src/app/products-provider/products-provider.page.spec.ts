import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductsProviderPage } from './products-provider.page';

describe('ProductsProviderPage', () => {
  let component: ProductsProviderPage;
  let fixture: ComponentFixture<ProductsProviderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsProviderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsProviderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
