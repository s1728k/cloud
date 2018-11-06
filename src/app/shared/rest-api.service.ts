import { Injectable, Inject }    from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable } from 'rxjs/Rx';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/toPromise';

declare let app;

@Injectable()
export class RestApiService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  };
  public url:string;  // URL to web api

  private cookies = ['XSRF-TOKEN', 'laravel_session'];

  constructor(private http:HttpClient, private messageService:MessageService) { }

  getObjs (): Observable<{}[]> {
    return this.http.get<{}[]>(this.url).pipe(
      tap(res => this.log('fetched res')),
      catchError(this.handleError('getObjs', []))
    );
  }

  getObj (): Observable<{}> {
    return this.http.get<{}>(this.url).pipe(
      tap(res => this.log('fetched res id=${id}')),
      catchError(this.handleError<{}>('res id=${id}'))
    );
  }

  addObj (obj:any): Observable<{}> {
    return this.http.post<{}>(this.url, obj).pipe(
      tap((res) => this.log('added new w/ id=${res.id}')),
      catchError(this.handleError<{}>('addObj'))
    );
  }

  updateObj (obj:any): Observable<{}> {
    return this.http.put(this.url, obj).pipe(
      tap(_ => this.log('updated hero id=${id}')),
      catchError(this.handleError<{}>('updateObj'))
    );
  }

  deleteObj (): Observable<{}> {
    return this.http.delete<{}>(this.url).pipe(
      tap(_ => this.log('deleted hero id=${id}')),
      catchError(this.handleError<{}>('deleteObj'))
    );
  }

  getObjLength(): Observable<number> {
    return this.http.get<number>(this.url).pipe(
      tap(res => this.log('res length is obtained')),
      catchError(this.handleError<number>('length error'))
    );
  }

  searchObjs(url: string): Observable<{}[]> {
    return this.http.get<{}[]>(url).pipe(
      tap(_ => this.log('found heroes matching "${term}"')),
      catchError(this.handleError<{}[]>('searchObjs', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      this.log('${operation} failed: ${error.message}');
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }

  private setRequestCookie(){
    this.setCookie('session_token', this.getCookie('session_token'), 0.5, '/');
  }

  private getCookie(name: string) {
      let ca: Array<string> = document.cookie.split(';');
      let caLen: number = ca.length;
      let cookieName = '${name}=';
      let c: string;

      for (let i: number = 0; i < caLen; i += 1) {
          c = ca[i].replace(/^\s+/g, '');
          if (c.indexOf(cookieName) == 0) {
              return c.substring(cookieName.length, c.length);
          }
      }
      return '';
  }

  private deleteCookie(name) {
      this.setCookie(name, '', -1);
  }

  private setCookie(name: string, value: string, expireDays: number, path: string = '') {
      let d:Date = new Date();
      d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
      let expires:string = 'expires=${d.toUTCString()}';
      let cpath:string = path ? '; path=${path}' : '';
      document.cookie = '${name}=${value}; ${expires}${cpath}';
  }

}
