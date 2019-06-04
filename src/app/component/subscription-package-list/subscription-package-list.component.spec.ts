import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionPackageListComponent } from './subscription-package-list.component';

describe('SubscriptionPackageListComponent', () => {
  let component: SubscriptionPackageListComponent;
  let fixture: ComponentFixture<SubscriptionPackageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionPackageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionPackageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
