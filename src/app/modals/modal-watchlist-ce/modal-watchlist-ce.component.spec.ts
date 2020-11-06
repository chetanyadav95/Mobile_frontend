import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalWatchlistCeComponent } from './modal-watchlist-ce.component';

describe('ModalWatchlistCeComponent', () => {
  let component: ModalWatchlistCeComponent;
  let fixture: ComponentFixture<ModalWatchlistCeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalWatchlistCeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalWatchlistCeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
