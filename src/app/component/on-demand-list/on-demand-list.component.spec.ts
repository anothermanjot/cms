import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnDemandListComponent } from './on-demand-list.component';

describe('OnDemandListComponent', () => {
  let component: OnDemandListComponent;
  let fixture: ComponentFixture<OnDemandListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnDemandListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnDemandListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
