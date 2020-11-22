import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PositionalPage } from './positional.page';

describe('PositionalPage', () => {
  let component: PositionalPage;
  let fixture: ComponentFixture<PositionalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PositionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
