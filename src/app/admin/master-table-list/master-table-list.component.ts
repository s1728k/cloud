import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { RestApiService } from '../../shared/rest-api.service';
import { environment } from '../../../environments/environment';

declare let $:any;
declare let app:any;

@Component({
  selector: 'app-master-table-list',
  templateUrl: './master-table-list.component.html',
  styleUrls: ['./master-table-list.component.scss']
})
export class MasterTableListComponent implements OnInit {

  master_table_list = [];
  mi = 0;
  si = 0;
  sParam = {};
  editMode = {};

  constructor(private http: RestApiService) { }

  ngOnInit() {
  	this.loadTable();
  }

  loadTable(){
  	this.http.url = environment.baseUrl + "api/laravelapp/mastertablelist/all";
  	this.http.getObj().subscribe((data:any)=>{
  		console.log(data);
      this.master_table_list = data;
  	});
  }

  addNewField(){
  	this.master_table_list.push({}={});
    this.http.url = environment.baseUrl + "api/laravelapp/mastertablelist/new";
    this.http.addObj({}).subscribe((data:any)=>{
      console.log(data);
    });
  }

  removeField(i){
    this.http.url = environment.baseUrl + "api/laravelapp/mastertablelist/" + String(this.master_table_list[i]['id']);
    this.http.deleteObj().subscribe((data:any)=>{
      console.log(data);
      this.master_table_list.splice(i,1);
    });
  }

  updateField(i){
    this.http.url = environment.baseUrl + "api/laravelapp/mastertablelist/" + String(this.master_table_list[i]['id']);
    this.http.updateObj(this.master_table_list[i]).subscribe((data:any)=>{
      console.log(data);
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
