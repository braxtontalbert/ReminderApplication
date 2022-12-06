import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';
import { ReminderModalComponent } from './components/reminder-modal/reminder-modal.component';

@Injectable({
  providedIn: 'root'
})
export class RESTAPIServiceService {

  constructor(private http : HttpClient, private router: Router) { }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })


  }


  sendUser(user: any){
    let url = "http://localhost:8000/login";

    return new Promise((resolve, reject) => {

      this.http.post(url, user, this.httpOptions).toPromise().then((res: any) => {


        if(res.Status == false){

          var message = alert("Email or password is incorrect!");

          resolve(message);

        }

        else{

          resolve(this.router.navigate(['home']));

        }

      });

      


    });
    


  }

  sendReminder(reminder: any, modal : ReminderModalComponent){
    let url = "http://localhost:8000/home";

    return new Promise((resolve, reject) => {

      this.http.post(url, reminder, this.httpOptions).toPromise().then((res: any) => {


        if(res.Status == true){


          
          var message = alert("Reminder set!");
          
          resolve(message);

          modal.close();
          modal.ClearFields();

        }

        else{

          var message = alert("Some error occured");
          resolve(message);
          

        }

      });

      


    });


  }
}
