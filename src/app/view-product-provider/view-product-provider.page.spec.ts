import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewProductProviderPage } from './view-product-provider.page';

describe('ViewProductProviderPage', () => {
  let component: ViewProductProviderPage;
  let fixture: ComponentFixture<ViewProductProviderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProductProviderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewProductProviderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  //it('should create', () => {
  //  expect(component).toBeTruthy();
  //});
});
