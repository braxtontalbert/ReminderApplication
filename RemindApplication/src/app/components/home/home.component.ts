import { Component, OnInit } from '@angular/core';
import { RESTAPIServiceService } from '../../restapiservice.service'
import { Router } from "@angular/router"
import {ReminderModalComponent} from "src/app/components/reminder-modal/reminder-modal.component"



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = "Remind App: Home"


  

  constructor(private service: RESTAPIServiceService, private router: Router, public modal : ReminderModalComponent) { }

  ngOnInit(): void {
  }

  createNewReminder(){
    this.modal.open();
    
  }

  addReminder(){

    this.modal.SetReminder(this.modal);
  }

  


}
