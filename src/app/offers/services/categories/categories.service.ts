import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

 
  constructor(private http: HttpClient) { }
  public token = process.env['TOKEN'];
  public clientId = process.env['CLIENT_ID'];
  public clientSecret = process.env['CLIENT_SECRET'];

  // public token = environment.token;
  // public clientId = environment.clientId;
  // public clientSecret = environment.clientSecret;
  
  
    public  credentials = `${this.clientId}:${this.clientSecret}`;
    public  encodedCredentials = btoa(this.credentials);

  

  getCategories(): Observable<any> {
    
    

    const headers = new HttpHeaders()
    .set('Authorization', `Basic ${this.encodedCredentials}`)
    .set('Content-Type', 'application/json');
    const url = 'api/api/1/dictionary/category';
  
      return this.http.get(url, {headers});
    }

}
