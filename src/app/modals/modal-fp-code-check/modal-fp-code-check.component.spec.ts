import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalFpCodeCheckComponent } from './modal-fp-code-check.component';

describe('ModalFpCodeCheckComponent', () => {
  let component: ModalFpCodeCheckComponent;
  let fixture: ComponentFixture<ModalFpCodeCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFpCodeCheckComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalFpCodeCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
