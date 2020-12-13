import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeProviderPage } from './home-provider.page';

describe('HomeProviderPage', () => {
  let component: HomeProviderPage;
  let fixture: ComponentFixture<HomeProviderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeProviderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeProviderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
