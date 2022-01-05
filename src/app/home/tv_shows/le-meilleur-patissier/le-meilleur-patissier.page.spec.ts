import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeMeilleurPatissierPage } from './le-meilleur-patissier.page';

describe('LeMeilleurPatissierPage', () => {
  let component: LeMeilleurPatissierPage;
  let fixture: ComponentFixture<LeMeilleurPatissierPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LeMeilleurPatissierPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeMeilleurPatissierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
