import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForceUpgradeComponent } from './force-upgrade.component';

describe('ForceUpgradeComponent', () => {
  let component: ForceUpgradeComponent;
  let fixture: ComponentFixture<ForceUpgradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForceUpgradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForceUpgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
