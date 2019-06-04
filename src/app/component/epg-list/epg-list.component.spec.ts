import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpgListComponent } from './epg-list.component';

describe('EpgListComponent', () => {
  let component: EpgListComponent;
  let fixture: ComponentFixture<EpgListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpgListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpgListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
