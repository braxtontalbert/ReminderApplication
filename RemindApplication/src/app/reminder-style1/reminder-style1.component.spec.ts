import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderStyle1Component } from './reminder-style1.component';

describe('ReminderStyle1Component', () => {
  let component: ReminderStyle1Component;
  let fixture: ComponentFixture<ReminderStyle1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReminderStyle1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReminderStyle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
