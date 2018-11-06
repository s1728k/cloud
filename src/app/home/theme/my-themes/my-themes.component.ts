import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { RestApiService } from '../../../shared/rest-api.service';
import { environment } from '../../../../environments/environment';

declare let $:any;
declare let app:any;

@Component({
  selector: 'app-my-themes',
  templateUrl: './my-themes.component.html',
  styleUrls: ['./my-themes.component.scss']
})
export class MyThemesComponent implements OnInit {

my_theme_list = app.public_tables;
search_term:any;

  constructor() { }

  ngOnInit() {
  }

}
