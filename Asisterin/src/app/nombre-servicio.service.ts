import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NombreServicioService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' :'*'
    })
  }

  apiURL = 'https://my-json-server.typicode.com/victorrosendo/repoUsuariosRamos';

  constructor(private http:HttpClient) { }


  getUsuarios():Observable<any>{
    return this.http.get(this.apiURL+'/users/').pipe(
      retry(3)
    );
  }


}
