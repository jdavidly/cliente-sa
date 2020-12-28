import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerSubastasPage } from './ver-subastas.page';

describe('VerSubastasPage', () => {
  let component: VerSubastasPage;
  let fixture: ComponentFixture<VerSubastasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerSubastasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerSubastasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
