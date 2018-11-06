import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RestApiService } from '../../../shared/rest-api.service';
import { environment } from '../../../../environments/environment';

declare let $;
declare let app;

@Component({
  selector: 'app-client-app-list',
  templateUrl: './client-app-list.component.html',
  styleUrls: ['./client-app-list.component.scss']
})
export class ClientAppListComponent implements OnInit {

	newClientApp = {};
  myClientAppList = [];
  
  constructor(private http:RestApiService) { }

  ngOnInit() {
    this.getMyApps();
    this.myClientAppList = app.myClientAppList;
  }

  getMyApps(){
    this.http.url = environment.baseUrl + "oauth/clients"
    this.http.getObjs().subscribe((data:any) =>{
      console.log(data);
    });
  }

  createNewApp(){
  	let formData = this.newClientApp;
  	this.http.url = environment.baseUrl + "oauth/clients"
  	this.http.addObj(formData).subscribe((data:any) =>{
  		console.log(data);
  	});
  }

  updateMyApp(id){
    let formData = this.newClientApp;
    this.http.url = environment.baseUrl + "oauth/clients/" + String(id);
    this.http.updateObj(formData).subscribe((data:any) =>{
      console.log(data);
    });
  }

  deleteMyApp(id){
    this.http.url = environment.baseUrl + "oauth/clients/" + String(id);
    this.http.deleteObj().subscribe((data:any) =>{
      console.log(data);
    });
  }

  showCreateForm(){
    this.newClientApp['name'] = "";
    this.newClientApp['redirect'] = "";
    $("#createNewClient").modal();
  }

  showUpdateForm(i){
    this.newClientApp['name'] = this.myClientAppList[i]['name'];
    this.newClientApp['redirect'] = this.myClientAppList[i]['redirect'];
    $("#updateClientApp").modal();
  }

}
