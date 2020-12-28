import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerDetalleSubastaPage } from './ver-detalle-subasta.page';

describe('VerDetalleSubastaPage', () => {
  let component: VerDetalleSubastaPage;
  let fixture: ComponentFixture<VerDetalleSubastaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerDetalleSubastaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerDetalleSubastaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
