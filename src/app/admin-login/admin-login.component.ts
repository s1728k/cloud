import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';
import { environment } from '../../environments/environment';

declare let $;
declare let app;

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

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
    this.http.url = environment.apiUrl + "admin_login";
    this.http.addObj(this.myCustomer).subscribe((data:any)=>{
      console.log(data);
      app.token = data.session_token;
      this.router.navigate(['/admin/master-table-list']);
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
