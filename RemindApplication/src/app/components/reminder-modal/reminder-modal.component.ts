import { SelectorContext } from '@angular/compiler';
import {AppComponent} from 'src/app/app.component';
import { Component, Injectable, OnInit ,ViewChild, ViewContainerRef} from '@angular/core';

import {RESTAPIServiceService} from '../../restapiservice.service';




@Component({
  selector: 'app-reminder-modal',
  templateUrl: './reminder-modal.component.html',
  styleUrls: ['./reminder-modal.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class ReminderModalComponent implements OnInit {

  
  reminderTitle = "";

  reminderBody = "";

   

  constructor(private service : RESTAPIServiceService, private app: AppComponent) { }

  ngOnInit(): void {
  }

  displayStyle = "none";


  open(){

    console.log("Got past modal open");
    this.displayStyle = "block";
  }

  close(){

    this.displayStyle = "none";
  }

  SetReminder(modal: ReminderModalComponent){



    let reminder = {title: this.reminderTitle, body: this.reminderBody}
    
    this.service.sendReminder(reminder,modal);

    this.app.createComponent(this.reminderTitle, this.reminderBody);
    


  }

  ClearFields(){


    this.reminderBody = '';
    this.reminderTitle = '';

  }

}
