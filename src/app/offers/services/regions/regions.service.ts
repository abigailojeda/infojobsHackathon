import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegionsService {

  constructor(private http: HttpClient) { }
  public token="ZmYyZDc4YTEyNzRjNGY4MGJkYjgyYjA0ZDdkYzY4OTM6IERCYzdEdFVBY0FFWjJKeEw5UEtYK2tadUhmZXdETjlpbjljYTkrQ3ZXcHg5N24vdWpo"
public clientId ='ff2d78a1274c4f80bdb82b04d7dc6893'
public clientSecret='DBc7DtUAcAEZ2JxL9PKX+kZuHfewDN9in9ca9+CvWpx97n/ujh'


  public  credentials = `${this.clientId}:${this.clientSecret}`;
  public  encodedCredentials = btoa(this.credentials);
  


  getRegions(): Observable<any> {
    
  // const headers = new HttpHeaders({
  //   Authorization: `Basic ${this.encodedCredentials}`,
  //   'Content-Type': 'application/json',
  // });
  const headers = new HttpHeaders()
  .set('Authorization', `Basic ${this.encodedCredentials}`)
  .set('Content-Type', 'application/json');
    const url = '/api/1/dictionary/region';

    console.log({headers})
    return this.http.get(url, {headers});
  }

// getRegions(): Observable<any> {
//   const url = 'http://localhost:3000/regions';

//   return this.http.get(url);
// }
}
