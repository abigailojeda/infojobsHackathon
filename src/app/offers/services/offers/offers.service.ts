import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  constructor(private http: HttpClient) { }
  public token="ZmYyZDc4YTEyNzRjNGY4MGJkYjgyYjA0ZDdkYzY4OTM6IERCYzdEdFVBY0FFWjJKeEw5UEtYK2tadUhmZXdETjlpbjljYTkrQ3ZXcHg5N24vdWpo"
  public clientId ='ff2d78a1274c4f80bdb82b04d7dc6893'
  public clientSecret='DBc7DtUAcAEZ2JxL9PKX+kZuHfewDN9in9ca9+CvWpx97n/ujh'
  
  
    public  credentials = `${this.clientId}:${this.clientSecret}`;
    public  encodedCredentials = btoa(this.credentials);

  // getOffers(): Observable<any> {
  //   const url = 'http://localhost:3000/offers';

  //   return this.http.get(url);
  // }

  getOffers(): Observable<any> {
    
    // const headers = new HttpHeaders({
    //   Authorization: `Basic ${this.encodedCredentials}`,
    //   'Content-Type': 'application/json',
    // });
    const headers = new HttpHeaders()
    .set('Authorization', `Basic ${this.encodedCredentials}`)
    .set('Content-Type', 'application/json');
      const url = 'api/api/7/offer?category=informatica-telecomunicaciones';
  
      return this.http.get(url, {headers});
    }
}
