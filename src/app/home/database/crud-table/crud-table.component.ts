import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { RestApiService } from '../../../shared/rest-api.service';
import { environment } from '../../../../environments/environment';

declare let $:any;
declare let app:any;

@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.scss']
})
export class CrudTableComponent implements OnInit {

  databaseList = [];
  table_group_names = [];
	my_table_list = [];
  my_table = [];
	field_names = [
    {'id':1, "field_name":"name", "data_type":"string"},
    {'id':2, "field_name":"private", "data_type":"boolean"},
    {'id':3, "field_name":"table_size", "data_type":"integer"},
    {'id':4, "field_name":"created_by", "data_type":"string"},
  ];
  input_types = app.input_types;
  default_values = app.default_values;
	selTable = {};
	mi = 0;
	si = 0;
	sParam = {};
  editMode = {};

  constructor(private http: RestApiService) { }

  ngOnInit() {
  	this.getDatabases();
  }

  getDatabases(){
    this.http.url = environment.apiUrl + "databases" + "?token=" + app.token;
    this.http.getObjs().subscribe((data:any)=>{
      console.log(data);
      this.databaseList = data;
    });
  }

  getTableGroups(){
    this.http.url = environment.apiUrl + this.selTable['database_name'] + "/tablegroups" + "?token=" + app.token;
    this.http.getObjs().subscribe((data:any)=>{
      console.log(data);
      this.table_group_names = data;
    });
  }

  getTablesInTableGroup(){
    this.http.url = environment.apiUrl + this.selTable['database_name'] + "/" + this.selTable['group_name'] + "/tables" + "?token=" + app.token;
    this.http.getObjs().subscribe((data:any)=>{
      console.log(data);
      this.my_table_list = data;
    });
  }

  loadTable(){
    this.http.url = environment.apiUrl + this.selTable['database_name'] + "/" + this.selTable['table_name'] + "/field_data_types" + "?token=" + app.token;
    this.http.getObjs().subscribe((data:any)=>{
      console.log(data);
      this.field_names = data;
    });
    this.http.url = environment.apiUrl + this.selTable['database_name'] + "/" + this.selTable['table_name'] + "/all" + "?token=" + app.token;
    this.http.getObjs().subscribe((data:any)=>{
      console.log(data);
      this.my_table = data;
    });
  }

  addNewRecord(){
    let newRecord = {};
    for (let i = 0; i < this.field_names.length; i++) {
      newRecord[this.field_names[i]["field_name"]] = this.default_values[this.field_names[i]["data_type"]];
    }
    this.http.url = environment.apiUrl + this.selTable['database_name'] + "/" + this.selTable['table_name'] + "/new" + "?token=" + app.token;
    this.http.addObj(newRecord).subscribe((data:any)=>{
      console.log(data);
      this.my_table = data;
    });
  }

  updateRecord(i){
    this.http.url = environment.apiUrl + this.selTable['database_name'] + "/" + this.selTable['table_name'] 
    + "/" + String(this.my_table[i]['id']) + "?token=" + app.token;
    this.http.updateObj(this.my_table[i]).subscribe((data:any)=>{
      console.log(data);
      this.my_table = data;
    });
  }

  deleteRecord(i){
    this.http.url = environment.apiUrl + this.selTable['database_name'] + "/" + this.selTable['table_name'] 
    + "/" + String(this.my_table[i]['id']) + "?token=" + app.token;
    this.http.deleteObj().subscribe((data:any)=>{
      console.log(data);
      this.my_table = data;
    });
  }

}
