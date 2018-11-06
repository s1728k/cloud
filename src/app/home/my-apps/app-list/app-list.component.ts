import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { RestApiService } from '../../../shared/rest-api.service';
import { environment } from '../../../../environments/environment';

declare let $:any;
declare let app:any;

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.scss']
})
export class AppListComponent implements OnInit {

  new_app = {};
  mod_app = {};
  my_app_list = [];
  mi = 0;
  si = 0;
  sParam = {};
  editMode = {};
  active_app_id = null;

  constructor(private http: RestApiService) { }

  ngOnInit() {
  	this.loadTable();
  }

  loadTable(){
  	this.http.url = environment.baseUrl + "api/myapps/all" + "?token=" + app.token;
  	this.http.getObj().subscribe((data:any)=>{
  		console.log(data);
      this.active_app_id = app['user']['active_app_id'];
      this.my_app_list = data;
  	});
  }

  createNewApp(){
  	// this.my_app_list.push(this.new_app);
    this.http.url = environment.baseUrl + "api/myapps/new" + "?token=" + app.token;
    this.http.addObj(this.new_app).subscribe((data:any)=>{
      console.log(data);
      this.my_app_list[this.my_app_list.length-1]['id']=data['active_app_id'];
      this.active_app_id = data['active_app_id'];
    });
  }

  showDeleteMyAppModal(myApp){
      this.mod_app = myApp;
      $("#deleteMyApp").modal();
  }

  deleteMyApp(){
    this.http.url = environment.baseUrl + "api/myapps/" + String(this.mod_app['id']) + "?token=" + app.token;
    this.http.deleteObj().subscribe((data:any)=>{
      console.log(data);
      this.active_app_id = data['active_app_id'];
      this.loadTable();
    });
  }

  showUpdateMyAppModal(myApp){
      this.mod_app = myApp;
      $("#updateMyApp").modal();
  }

  updateMyApp(){
    this.http.url = environment.baseUrl + "api/myapps/" + String(this.mod_app['id']) + "?token=" + app.token;
    this.http.updateObj(this.mod_app).subscribe((data:any)=>{
      console.log(data);
      this.active_app_id = data['active_app_id'];
    });
    this.mod_app = {};
  }

  selectActiveApp(myapp){
    this.http.url = environment.baseUrl + "api/myapps/activeapp/" + String(myapp['id']) + "?token=" + app.token;
    this.http.updateObj({}).subscribe((data:any)=>{
      console.log(data);
      this.active_app_id = data['active_app_id'];
    });
  }

  assert(field, value){
  	if(!value){alert(field + " is empty and is required."); throw new Error(field + " is empty and is required.");}
  }

  validateNewTable(){
  	// this.assert('Table Name', this.selTable['table_name'])
  	// this.assert('Database Name', this.selTable['database_name'])
  	// for (let i = 0; i < this.selTable['fields'].length; i++) {
  	// 	this.assert('Field Name' + String(i+1), this.selTable['fields'][i]['field_name']);
  	// 	this.assert('Data Type' + String(i+1), this.selTable['fields'][i]['data_type']);
  	// }
  }

  updateTable(){
  	this.validateNewTable();
  	// this.http.url = environment.baseUrl + "newtable";
  	// this.http.addObj(this.selTable).subscribe((data:any)=>{
  	// 	console.log(data);
  	// });
  }

}
