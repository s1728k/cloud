import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { RestApiService } from '../../../shared/rest-api.service';
import { environment } from '../../../../environments/environment';

declare let $:any;
declare let app:any;

@Component({
  selector: 'app-public-themes',
  templateUrl: './public-themes.component.html',
  styleUrls: ['./public-themes.component.scss']
})
export class PublicThemesComponent implements OnInit {

public_theme_list = app.public_tables;
search_term:any;

  constructor() { }

  ngOnInit() {
  }

}
