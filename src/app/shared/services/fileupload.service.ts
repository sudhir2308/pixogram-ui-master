import { Injectable } from '@angular/core';
// import { HttpInterceptor } from '../../shared/services/httpinterceptor';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class FileuploadService {
  _baseURL: String = 'http://localhost:xxxx/api/fileupload/';
  constructor(private http: Http) { }

  upload(files, parameters) {
    const headers = new Headers();
    const options = new RequestOptions({ headers: headers });
    options.params = parameters;
    return  this.http.post(this._baseURL + 'upload', files, options)
             .map(response => response.json())
             .catch(error => Observable.throw(error));

  }

  private extractReponseData(res: Response) {
    const body = res.json();
    return body;
  }

}
