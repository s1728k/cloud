import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { RestApiService } from '../../shared/rest-api.service';
import { environment } from '../../../environments/environment';

declare let $;
declare let app;

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})
export class EmailFormComponent implements OnInit {

	myCustomer = {};
  error = {};

  constructor(private http: RestApiService,) { }

  ngOnInit() {
  }

  assert(field, value){
    if(!value){this.error[field] = "required field"}
  }

  validateEmail(email) {
      var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      return re.test(email);
  }

  validateMyCustomer(){
    this.assert('email', this.myCustomer['email']);
    if(!this.error['email'] && !this.validateEmail(this.myCustomer['email'])){
    	this.error['email'] = "Invalid Email"
    }
  }

  submit(){
    this.error = {};
    this.validateMyCustomer();
    // this.http.url = environment.baseUrl + "newtable";
    // this.http.addObj(this.myCustomer).subscribe((data:any)=>{
    //   console.log(data);
    // });
  }

}
