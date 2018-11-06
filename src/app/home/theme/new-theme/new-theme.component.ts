import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RestApiService } from '../../../shared/rest-api.service';
import { environment } from '../../../../environments/environment';

declare let $;
declare let app;

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.scss']
})
export class NewThemeComponent implements OnInit {

  free_databases = [];
	my_table_list = {};
	data_types = app.data_types;
	selTheme = {};

  constructor(private http: RestApiService,) { }

  ngOnInit() {
  	this.selTheme['files'] = [];
  	this.addNewFile();
  	this.getDatabaseList();
  }

  getDatabaseList(){
  	// this.http.url = environment.baseUrl + "database_list";
  	// this.http.getObj().subscribe((data:any)=>{
  	// 	console.log(data);
  	// });
  	this.free_databases = app.free_databases;
  }

  onDatabaseSelect(dbname, i){
  	// this.http.url = environment.baseUrl + "table_list/" + dbname;
  	// this.http.getObj().subscribe((data:any)=>{
  	// 	console.log(data);
  	// });
  	this.my_table_list[i] = app.my_table_list;
  }

  onTableSelect(table_name){
  	// this.http.url = environment.baseUrl + "table_list/" + dbname;
  	// this.http.getObj().subscribe((data:any)=>{
  	// 	console.log(data);
  	// });
  }

  addNewFile(){
  	this.selTheme['files'].push({}={});
  }

  removeField(i){
  	this.selTheme['files'].splice(i,1);
  }

  uploadNewTheme(){

  }

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        formData.append('uploadFile', file, file.name);
        // const url = environment.baseUrl + "api/file/renthouse/images/" + String(this.newRentHouse['id']);
        // this.http.post(url, formData).subscribe((data:any) => {
        //     this.newRentHouse['images'].push(data);
        //     if (this.newRentHouse['images'].length == 1){this.selectedHouseImage = data.path;}
        // })
    }
  }

}
