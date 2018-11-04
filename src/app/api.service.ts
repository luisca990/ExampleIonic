import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = 'https://jsonplaceholder.typicode.com';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient ) { }

  get(endpoint): Observable<any> {
    return this.http.get(`${apiUrl}/${endpoint}`, httpOptions)
    .pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  private extractData(res: Response){
    let body = res;
    console.log(body)
    return body || {};
  }

  private handleError(error: HttpErrorResponse){
    return throwError ("Algo salio mal")
  }

}
