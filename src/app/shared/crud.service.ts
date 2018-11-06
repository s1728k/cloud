import { Injectable, Inject }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CRUDService {
  private headers = new Headers({'Content-Type': 'application/json'});
  public url:string;  // URL to web api
  constructor(public http:Http) { }

  getObjs(): Promise<{}[]> {
    return this.http.get(this.url)
               .toPromise()
               .then(response => response.json().data as {}[])
               .catch(this.handleError);
  }

  getObj(): Promise<{}> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => response.json().data as {})
      .catch(this.handleError);
  }

  getObjLength(): Promise<number> {
    return this.http.get(this.url)
      .toPromise()
      .then(response => response.json().total as number)
      .catch(this.handleError);
  }

  delObj(): Promise<void> {
    return this.http.delete(this.url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  newObj(obj: any): Promise<{}> {
    return this.http
      .post(this.url, JSON.stringify(obj), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as {})
      .catch(this.handleError);
  }

  modObj(obj: any): Promise<{}> {
    return this.http
      .put(this.url, JSON.stringify(obj), {headers: this.headers})
      .toPromise()
      .then(() => obj)
      .catch(this.handleError);
  }

  // getFile(obj: any): Promise<File> {
  //   return this.http
  //     .post(this.url, JSON.stringify(obj), {headers: this.headers})
  //     .toPromise()
  //     .then(res => res._body as any)
  //     .catch(this.handleError);
  // }

  // getImage(imageUrl: string): Observable<File> {
  //       return this.http
  //           .get(imageUrl, { responseType: ResponseContentType.Blob })
  //           .map((res: Response) => res.blob());
  //   }

  // getImage(obj:any){ 
  //   return Observable.create(observer=>{
  //     let req = new XMLHttpRequest();
  //     req.open('post',this.url);
  //     req.responseType = "arraybuffer";
  //     req.onreadystatechange = function() {
  //       if (req.readyState == 4 && req.status == 200) {
  //         observer.next(req.response);
  //         observer.complete();
  //       }
  //     };
  //     req.send(obj);
  //   });
  // }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
