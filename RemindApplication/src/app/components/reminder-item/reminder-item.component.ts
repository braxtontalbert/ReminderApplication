import { Component, ComponentFactory, Input, OnDestroy, OnInit } from '@angular/core';
import { ReminderComponent } from '../reminder/reminder.component';

@Component({
  selector: 'app-reminder-item',
  templateUrl: './reminder-item.component.html',
  styleUrls: ['./reminder-item.component.css']
})
export class ReminderItemComponent implements OnInit {

  
  reminderTitle = ''
  reminderBody = ''


  constructor(public component: ReminderComponent) { }

  ngOnInit(): void {
  }
  
  ngOnDestroy(){}



}
