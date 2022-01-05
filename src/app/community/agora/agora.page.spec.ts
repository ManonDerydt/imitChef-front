import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';


import { AgoraPage } from './agora.page';

describe('AgoraPage', () => {
  let component: AgoraPage;
  let fixture: ComponentFixture<AgoraPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AgoraPage],

    }).compileComponents();

    fixture = TestBed.createComponent(AgoraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
