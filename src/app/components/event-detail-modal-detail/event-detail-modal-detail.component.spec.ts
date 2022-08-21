import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventDetailModalDetailComponent } from './event-detail-modal-detail.component';

describe('EventDetailModalDetailComponent', () => {
  let component: EventDetailModalDetailComponent;
  let fixture: ComponentFixture<EventDetailModalDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EventDetailModalDetailComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventDetailModalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
