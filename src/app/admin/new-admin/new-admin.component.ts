import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { RestApiService } from '../../shared/rest-api.service';
import { environment } from '../../../environments/environment';

declare let $;
declare let app;

@Component({
  selector: 'app-new-admin',
  templateUrl: './new-admin.component.html',
  styleUrls: ['./new-admin.component.scss']
})
export class NewAdminComponent implements OnInit {

  newCustomer = {};
  error = {};

  countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

  constructor(private http: RestApiService, private router: Router,) { }

  ngOnInit() {
  }

  nickNameCheck(){
  	// this.http.url = environment.baseUrl + "newtable";
  	// this.http.addObj(this.newCustomer).subscribe((data:any)=>{
  	// 	console.log(data);
  	// });
    if(this.error['nickname']){
      this.error['nickname'] = ""
    }else{
      this.error['nickname'] = "this nickname is used"
    }
  }

  confirmPasswordCheck(){
  	if(this.newCustomer['password'] !== this.newCustomer['confirm_password']){
  		this.error['confirm_password'] = "Passwords did not match.";
  	}else{
  		this.error['confirm_password'] = "";
  	}
  }

  emailCheck(){
  	if(this.newCustomer['email']===""){
  		this.error['email'] = ""
  	}else{
  		this.error['email'] = "this email is already in use"
      if(!this.validateEmail(this.newCustomer['email'])){
        this.error['email'] = "invalid email"
      }
  	}
  }

  // assert(field, value){
  // 	if(!value){this.error[field] = "required field"}
  // }

  // validateEmail(email) {
  //     var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  //     return re.test(email);
  // }

  // validateNewCustomer(){
  // 	this.assert('nickname', this.newCustomer['nickname']);
  // 	this.assert('name', this.newCustomer['name']);
  // 	this.assert('email', this.newCustomer['email']);
  // 	this.assert('password', this.newCustomer['password']);
  // 	this.assert('confirm_password', this.newCustomer['confirm_password']);
  // }

  signup(){
  	this.error = {};
    this.validateNewCustomerEmail();
    this.validateNewCustomerPassword();
    this.validateNewCustomerConfirmPassword();
    this.validateNewCustomer();
    if (Object.getOwnPropertyNames(this.error).length === 0){
	  	this.http.url = environment.apiUrl + "admin_register";
	  	this.http.addObj(this.newCustomer).subscribe((data:any)=>{
	  		console.log(data);
        alert("Admin Saved");
        this.router.navigate(['/admin-login']);
	  	});
    }
  }

  assert(field, value){
    if(!value){this.error[field]="visible";this.error[field + '_ev']="Mandatory Field. ";}
  }

  validateNewCustomer(){
    this.assert('nickname', this.newCustomer['nickname'])
    this.assert('name', this.newCustomer['name'])
    this.assert('email', this.newCustomer['email'])
    this.assert('password', this.newCustomer['password'])
    this.assert('confirm_password', this.newCustomer['confirm_password'])
  }

  validateNewCustomerEmail(){
    if(!this.validateEmail(this.newCustomer['email'])){
      this.error['email_ev'] = "Invalid Email ID";
      this.error['email']="visible";
    }
  }

  validateNewCustomerPassword(){
    if(!this.validatePassword(this.newCustomer['password'])){
      this.error['password_ev'] = "Password should contain atleat one number and one special charector";
      this.error['password']="visible";
    }
  }

  validateNewCustomerConfirmPassword(){
    if(this.newCustomer['password'] != this.newCustomer['confirm_password']){
      this.error['confirm_password_ev'] = "Passwords did not match";
      this.error['confirm_password']="visible";
    }
  }

  validateEmail(email) {
      var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      return re.test(email);
  }

  validatePassword(password) {
      var re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/i;
      return re.test(password);
  }

}
