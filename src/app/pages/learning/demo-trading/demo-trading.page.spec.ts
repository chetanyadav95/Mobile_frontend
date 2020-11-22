import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DemoTradingPage } from './demo-trading.page';

describe('DemoTradingPage', () => {
  let component: DemoTradingPage;
  let fixture: ComponentFixture<DemoTradingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTradingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DemoTradingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
