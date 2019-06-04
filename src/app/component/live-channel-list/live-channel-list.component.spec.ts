import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveChannelListComponent } from './live-channel-list.component';

describe('LiveChannelListComponent', () => {
  let component: LiveChannelListComponent;
  let fixture: ComponentFixture<LiveChannelListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveChannelListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveChannelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
