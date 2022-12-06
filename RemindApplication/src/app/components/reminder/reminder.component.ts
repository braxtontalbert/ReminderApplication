import { Component, OnInit, Directive, ViewContainerRef, Input, OnDestroy, ViewChild, ComponentFactoryResolver, ComponentFactory} from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { ReminderDirective } from 'src/app/directives/reminder.directive';
import { ReminderItemComponent } from '../reminder-item/reminder-item.component';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css'],
  template: 
  `
  <div class="container-fluide">
    <h3>Reminder</h3>
    <ng-template appReminder></ng-template>
  </div>
  
  `
})



export class ReminderComponent implements OnInit, OnDestroy {

  
  @Input() reminders: ReminderItemComponent[] = []

  currentReminderIndex = -1;

  @ViewChild(ReminderDirective,{static: true}) appReminder!: ReminderDirective;
  interval: number|undefined;


   

  ngOnInit(){

  }
  ngOnDestroy(){

    clearInterval(this.interval);
  }

}
