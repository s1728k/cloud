import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

declare let $;
declare let app;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  flag = {};
  api_token: string;

  menus = app.menu;

  constructor(private router: Router, private http:HttpClient,) { 
    if (typeof(Storage) !== "undefined") {
        // Code for localStorage/sessionStorage.
        console.log("this browser support local storage")
        localStorage.lastname="Smith";
        console.log(localStorage.lastname);
    } else {
        // Sorry! No Web Storage support..
        console.log("this browser doesn't support local storage")
    }
    console.log(this.menus);
  }

  ngOnInit(){
    // this.api_token = this.appStore.api_token;
    if (this.api_token === environment.userAccess){
      // this.menus.push(['Price List']);
      // this.paths.push(['/api-license/price-list']);
      // this.menus.push(['Users List']);
      // this.paths.push(['/api-license/users-list']);
    }
  }

  /**
   * method to navigate on clicked
   * route from menu
   * @param route route to navigate
   */
  routerFunction(route: string): void {
    console.log(route);
    // const navigationExtras: NavigationExtras = {
    //   queryParams: {'id': 1},
    // };
    // this.router.navigate(['/route'], navigationExtras);
    if(route === '/new-rent-house'){
      let id = null;
      const url = environment.baseUrl + 'api/RentHouse/new';
      console.log(url);
      this.http.post(url, {}).subscribe((data:any) => {
        console.log(data);
        this.router.navigate([route, data]);
      });
    }else{
      this.router.navigate([route]);
    }
    
  }

  changeFlag(i): void {
    if (this.flag[i]) {
      this.flag[i] = false;
    } else {
      this.flag[i] = true;
    }
    console.log(this.flag[i]);
  }

}
