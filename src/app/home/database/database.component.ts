import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { RestApiService } from '../../shared/rest-api.service';
import { environment } from '../../../environments/environment';

declare let $:any;
declare let app:any;

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent implements OnInit {

	free_databases = app.free_databases;
	data_types = app.data_types;
	data_type_modifiers = app.data_type_modifiers;
	my_sql_indexes = app.my_sql_indexes;
	newTable = {};
	mi = 0;
	si = 0;

  constructor(private http: RestApiService,) { }

  ngOnInit() {
  	this.newTable['fields'] = [];
  }

  addNewField(){
  	this.newTable['fields'].push({}={});
  	this.newTable['fields'][this.newTable['fields'].length-1]['elequent_array'] = "visibles"
  	this.newTable['fields'][this.newTable['fields'].length-1]['data_type_modifier'] = {};
  	this.newTable['fields'][this.newTable['fields'].length-1]['my_sql_index'] = {};
  }

  removeField(i){
  	this.newTable['fields'].splice(i,1);
  }

  modifierInput(i){
  	const temp = this.newTable['fields'][i]['data_type_modifier']['name'];
  	this.mi = i;
  	if (temp === "comment" || temp === "default" || temp === "storedAs" || temp === "virtualAs" ){
  		$("#modifierInputModel").modal();
  	}
  	if (temp === "after" ){
  		$("#afterModifierInputModel").modal();
  	}
  }

  sqlIndexInput(i){
  	const temp = this.newTable['fields'][i]['my_sql_index']['name'];
  	this.si = i;
  	if (temp === "primary" || temp === "unique" ){
  		$("#sqlIndexInputModel").modal();
  	}
  }

  assert(field, value){
  	if(!value){alert(field + " is empty and is required."); throw new Error(field + " is empty and is required.");}
  }

  validateNewTable(){
  	this.assert('Table Name', this.newTable['table_name'])
  	this.assert('Database Name', this.newTable['database_name'])
  	for (let i = 0; i < this.newTable['fields'].length; i++) {
  		this.assert('Field Name' + String(i+1), this.newTable['fields'][i]['field_name']);
  		this.assert('Data Type' + String(i+1), this.newTable['fields'][i]['data_type']);
  	}
  }

  createNewTable(){
  	this.validateNewTable();
  	// this.http.url = environment.baseUrl + "newtable";
  	// this.http.addObj(this.newTable).subscribe((data:any)=>{
  	// 	console.log(data);
  	// });
  }

}
