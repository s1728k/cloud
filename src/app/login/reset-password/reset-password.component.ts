import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { RestApiService } from '../../shared/rest-api.service';
import { environment } from '../../../environments/environment';

declare let $;
declare let app;

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  myCustomer = {};
  error = {};

  constructor(private http: RestApiService,) { }

  ngOnInit() {
  }

  confirmPasswordCheck(){
    if(this.myCustomer['password'] !== this.myCustomer['confirm_password']){
      this.error['confirm_password'] = "Passwords did not match.";
    }else{
      this.error['confirm_password'] = "";
    }
  }

  assert(field, value){
    if(!value){this.error[field] = "required field"}
  }

  validateMyCustomer(){
    this.assert('password', this.myCustomer['password']);
    this.assert('confirm_password', this.myCustomer['confirm_password']);
  }

  reset(){
    this.error = {};
    this.validateMyCustomer();
    // this.http.url = environment.baseUrl + "newtable";
    // this.http.addObj(this.myCustomer).subscribe((data:any)=>{
    //   console.log(data);
    // });
  }
  
}
