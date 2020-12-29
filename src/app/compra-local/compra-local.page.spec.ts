import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompraLocalPage } from './compra-local.page';

describe('CompraLocalPage', () => {
  let component: CompraLocalPage;
  let fixture: ComponentFixture<CompraLocalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraLocalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompraLocalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
