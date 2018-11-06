import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RestApiService } from '../../../shared/rest-api.service';
import { environment } from '../../../../environments/environment';

declare let $;
declare let app;

@Component({
  selector: 'app-my-files',
  templateUrl: './my-files.component.html',
  styleUrls: ['./my-files.component.scss']
})
export class MyFilesComponent implements OnInit {

	my_files = [];
	sParam = {};

  constructor(private http:RestApiService) { }

  ngOnInit() {
  	this.getFiles();
  }

  getFiles(){
  	// this.http.url = environment.baseUrl + "files";
  	// this.http.getObjs().subscribe((data:any)=>{
  	// 	console.log(data);
  	// });
  	this.my_files = app.files;
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
