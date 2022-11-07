import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from
'@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' :'*'
    })
}
      // Se establece la base url del API a consumir
      apiURL = 'https://my-json-server.typicode.com/victorrosendo/repoUsuariosRamos';
      secURL = 'https://my-json-server.typicode.com/victorrosendo/repoSeccionAsigSeccion';
      // Se declara la variable http de tipo HttpClient
      constructor(private http:HttpClient) { }

      getUsuario():Observable<any>{return this.http.get(this.apiURL+'/users/').pipe(retry(3));}
} 

