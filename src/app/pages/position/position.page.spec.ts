import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PositionPage } from './position.page';

describe('PositionPage', () => {
  let component: PositionPage;
  let fixture: ComponentFixture<PositionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PositionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
