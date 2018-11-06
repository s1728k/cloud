import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { RestApiService } from '../../../shared/rest-api.service';
import { environment } from '../../../../environments/environment';

declare let $:any;
declare let app:any;

@Component({
  selector: 'app-community-table-list',
  templateUrl: './community-table-list.component.html',
  styleUrls: ['./community-table-list.component.scss']
})
export class CommunityTableListComponent implements OnInit {

	my_table_list = app.public_tables;
	search_term:any;

  constructor() { }

  ngOnInit() {
  }

}
