import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AppServiceService } from './app-service.service';
import {Router} from '@angular/router';
import { ReminderStyle1Component } from './reminder-style1/reminder-style1.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title:  string  = 'RemindApplication';
  @ViewChild("container", {read: ViewContainerRef}) 
  container!: ViewContainerRef


  createComponent(title:string, body:string){

    const component = this.container.createComponent(ReminderStyle1Component);
    
    component.instance.title = title;
    component.instance.body = body;



  }
  constructor(private service : AppServiceService, private router : Router){

    
      router.navigate(['/login']);
    
  }



  ngOnInit(){

  }

  
}
