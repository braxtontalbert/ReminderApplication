import { Component, OnInit } from '@angular/core';
import { RESTAPIServiceService } from '../../restapiservice.service';
import { Router } from "@angular/router"


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';
  constructor(private service: RESTAPIServiceService, private router: Router) { }

  ngOnInit(): void {

  }

  authenticateUser(){

    let user = { email: this.email, password: this.password};
    //let user = this.email;
    this.service.sendUser(user);


  }

}
