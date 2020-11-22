import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntraDayPage } from './intra-day.page';

describe('IntraDayPage', () => {
  let component: IntraDayPage;
  let fixture: ComponentFixture<IntraDayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntraDayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntraDayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
