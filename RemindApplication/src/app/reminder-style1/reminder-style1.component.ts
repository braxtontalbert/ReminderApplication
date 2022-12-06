import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reminder-style1',
  templateUrl: './reminder-style1.component.html',
  styleUrls: ['./reminder-style1.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReminderStyle1Component implements OnInit {

  @Input() title: string|undefined;
  @Input() body: string|undefined;

  constructor(){}

  ngOnInit(): void {
  }

}
