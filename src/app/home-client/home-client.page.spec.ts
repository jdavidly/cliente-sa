import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeClientPage } from './home-client.page';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('HomeClientPage', () => {
  let component: HomeClientPage;
  let fixture: ComponentFixture<HomeClientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeClientPage ],
      imports: [IonicModule.forRoot(),
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});