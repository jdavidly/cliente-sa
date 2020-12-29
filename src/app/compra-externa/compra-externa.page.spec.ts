import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompraExternaPage } from './compra-externa.page';

describe('CompraExternaPage', () => {
  let component: CompraExternaPage;
  let fixture: ComponentFixture<CompraExternaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraExternaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompraExternaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
