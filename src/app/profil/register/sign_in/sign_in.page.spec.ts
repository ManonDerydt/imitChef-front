import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Sign_inPage } from './sign_in.page';

describe('sign_inPage', () => {
  let component: Sign_inPage;
  let fixture: ComponentFixture<Sign_inPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Sign_inPage],
    }).compileComponents();

    fixture = TestBed.createComponent(Sign_inPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
