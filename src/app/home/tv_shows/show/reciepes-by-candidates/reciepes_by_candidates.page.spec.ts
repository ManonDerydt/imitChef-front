import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Reciepes_by_candidatesPage } from './reciepes_by_candidates.page';

describe('ReciepesByCandidatesPage', () => {
  let component: Reciepes_by_candidatesPage;
  let fixture: ComponentFixture<Reciepes_by_candidatesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Reciepes_by_candidatesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Reciepes_by_candidatesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
