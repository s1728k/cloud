import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { RestApiService } from '../../../shared/rest-api.service';
import { environment } from '../../../../environments/environment';

declare let $:any;
declare let app:any;

@Component({
  selector: 'app-development-crud-table',
  templateUrl: './development-crud-table.component.html',
  styleUrls: ['./development-crud-table.component.scss']
})
export class DevelopmentCrudTableComponent implements OnInit {

  dev_tables = ['Database', 'TableGroup', 'TablesTrack', 'TableField'];
	my_crud_table = [];
  my_crud_table_fields = [];
  input_types = app.input_types;
	databases = [
    {'id':1, "field_name":"name", "data_type":"string"},
    {'id':2, "field_name":"private", "data_type":"boolean"},
    {'id':3, "field_name":"table_size", "data_type":"integer"},
    {'id':4, "field_name":"created_by", "data_type":"string"},
  ];
  table_groups = [
    {'id':1, "field_name":"name", "data_type":"string"},
    {'id':2, "field_name":"database_name", "data_type":"string"},
    {'id':3, "field_name":"private", "data_type":"boolean"},
    {'id':4, "field_name":"table_size", "data_type":"integer"},
    {'id':5, "field_name":"created_by", "data_type":"string"},
  ];
  tables_track = [
    {'id':1, "field_name":"table_name", "data_type":"string"},
    {'id':2, "field_name":"table_group_name", "data_type":"string"},
    {'id':3, "field_name":"db_name", "data_type":"string"},
    {'id':4, "field_name":"table_description", "data_type":"text"},
    {'id':5, "field_name":"keywords", "data_type":"text"},
    {'id':6, "field_name":"private", "data_type":"boolean"},
    {'id':7, "field_name":"field_indexes", "data_type":"text"},
    {'id':8, "field_name":"fillable", "data_type":"text"},
    {'id':9, "field_name":"hidden", "data_type":"text"},
    {'id':10, "field_name":"created_by", "data_type":"string"},
  ];
  table_fields = [
    {'id':1, "field_name":"sr", "data_type":"unsignedInteger"},
    {'id':2, "field_name":"field_name", "data_type":"string"},
    {'id':3, "field_name":"data_type", "data_type":"string"},
  ];
	data_type_modifiers = app.data_type_modifiers;
	my_sql_indexes = app.my_sql_indexes;
	selTable = 'Databases';
	mi = 0;
	si = 0;
	sParam = {};
  editMode = {};

  constructor(private http: RestApiService) { }

  ngOnInit() {
  	this.loadTable();
  }

  loadTable(table_name = "Database"){
    this.selTable = table_name;
    switch (table_name) {
      case "TableGroup":
        this.my_crud_table_fields = this.table_groups;
        break;
      case "TablesTrack":
        this.my_crud_table_fields = this.tables_track;
        break;
      case "TableField":
        this.my_crud_table_fields = this.table_fields;
        break;
      default:
        this.my_crud_table_fields = this.databases;
        break;
    }
  	this.http.url = environment.baseUrl + "api/laravelapp/" + this.selTable + "/all";
  	this.http.getObj().subscribe((data:any)=>{
  		console.log(data);
      this.my_crud_table = data;
  	});
  }

  addNewField(){
  	this.my_crud_table.push({}={});
    this.http.url = environment.baseUrl + "api/laravelapp/" + this.selTable + "/new";
    this.http.addObj({}).subscribe((data:any)=>{
      console.log(data);
    });
  }

  removeField(i){
    this.http.url = environment.baseUrl + "api/laravelapp/" + this.selTable + "/" + String(this.my_crud_table[i]['id']);
    this.http.deleteObj().subscribe((data:any)=>{
      console.log(data);
      this.my_crud_table.splice(i,1);
    });
  }

  updateField(i){
    this.http.url = environment.baseUrl + "api/laravelapp/" + this.selTable + "/" + String(this.my_crud_table[i]['id']);
    this.http.updateObj(this.my_crud_table[i]).subscribe((data:any)=>{
      console.log(data);
    });
  }

  assert(field, value){
  	if(!value){alert(field + " is empty and is required."); throw new Error(field + " is empty and is required.");}
  }

  validateNewTable(){
  	this.assert('Table Name', this.selTable['table_name'])
  	this.assert('Database Name', this.selTable['database_name'])
  	for (let i = 0; i < this.selTable['fields'].length; i++) {
  		this.assert('Field Name' + String(i+1), this.selTable['fields'][i]['field_name']);
  		this.assert('Data Type' + String(i+1), this.selTable['fields'][i]['data_type']);
  	}
  }

  updateTable(){
  	this.validateNewTable();
  	// this.http.url = environment.baseUrl + "newtable";
  	// this.http.addObj(this.selTable).subscribe((data:any)=>{
  	// 	console.log(data);
  	// });
  }

}
