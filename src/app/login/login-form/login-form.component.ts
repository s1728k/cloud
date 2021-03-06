import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { RestApiService } from '../../shared/rest-api.service';
import { environment } from '../../../environments/environment';

declare let $;
declare let app;

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent implements OnInit {

  myCustomer = {};
  error = {};

  constructor(private http: RestApiService, private router: Router,) { }

  ngOnInit() {
  }

  assert(field, value){
    if(!value){this.error[field] = "required field"}
  }

  validateEmail(email) {
      var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      return re.test(email);
  }

  validateNewCustomer(){
    this.assert('email', this.myCustomer['email']);
    this.assert('password', this.myCustomer['password']);
  }

  login(){
    this.error = {};
    this.validateNewCustomer();
    this.http.url = environment.apiUrl + "client_login";
    this.http.addObj(this.myCustomer).subscribe((data:any)=>{
      console.log(data);
      app.token = data.session_token;
      app['user'] = data.user;
      this.router.navigate(['/my-apps/app-list']);
      // this.getUser();
    });
  }

  getUser(){
    this.http.url = environment.apiUrl + "user?token=" + app.token;
    this.http.getObj().subscribe((data:any)=>{
      console.log(data);
      // this.router.navigate(['/login/welcome']);
      app.token = data.session_token;
      this.getUser2();
    });
  }

  getUser2(){
    this.http.url = environment.apiUrl + "user?token=" + app.token;
    this.http.getObj().subscribe((data:any)=>{
      console.log(data);
      // this.router.navigate(['/login/welcome']);
    });
  }

}
