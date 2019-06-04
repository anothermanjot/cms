import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationJSONComponent } from './notification-json.component';

describe('NotificationJSONComponent', () => {
  let component: NotificationJSONComponent;
  let fixture: ComponentFixture<NotificationJSONComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationJSONComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationJSONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
