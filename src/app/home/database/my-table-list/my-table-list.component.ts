import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { RestApiService } from '../../../shared/rest-api.service';
import { environment } from '../../../../environments/environment';

declare let $:any;
declare let app:any;

@Component({
  selector: 'app-my-table-list',
  templateUrl: './my-table-list.component.html',
  styleUrls: ['./my-table-list.component.scss']
})
export class MyTableListComponent implements OnInit {

my_table_list = app.public_tables;
search_term:any;

  constructor(private http: RestApiService) { }

  ngOnInit() {
  	this.getTablesInActiveApp();
  }

  getTablesInActiveApp(){
    this.http.url = environment.apiUrl + "active_app/tables" + "?token=" + app.token;
    this.http.getObjs().subscribe((data:any)=>{
      console.log(data);
      this.my_table_list = data;
    });
  }

  getTables(){
    this.http.url = environment.apiUrl + "tables" + "?token=" + app.token;
    console.log(this.http.url);
    this.http.getObjs().subscribe((data:any)=>{
      console.log(data);
      this.my_table_list = data;
    });
  }

  deleteTable(table_name){
  	this.http.url = environment.apiUrl + "deletetable/" + table_name + "?token=" + app.token;
    this.http.deleteObj().subscribe((data:any)=>{
      console.log(data);
      this.my_table_list = data;
    });
  }

}
