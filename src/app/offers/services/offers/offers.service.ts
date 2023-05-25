import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OffersService {
  constructor(private http: HttpClient) {}

  // public token = process.env['TOKEN'];
  // public clientId = process.env['CLIENT_ID'];
  // public clientSecret = process.env['CLIENT_SECRET'];

  public token = environment.token;
  public clientId = environment.clientId;
  public clientSecret = environment.clientSecret;

  public credentials = `${this.clientId}:${this.clientSecret}`;
  public encodedCredentials = btoa(this.credentials);

  getOffers(category: string, region: string, page?:any): Observable<any> {
    let url = 'api/api/7/offer';

    if (category !='' && region !='') {
      url =  `api/api/7/offer?category=${category}&province=${region}&page=${page}`
    }

    if (region !='' && category == '') {
      url =  `api/api/7/offer?province=${region}&page=${page}`
    }
    if (region =='' && category != '') {
      url =  `api/api/7/offer?category=${category}&page=${page}`
    }

    const headers = new HttpHeaders()
      .set('Authorization', `Basic ${this.encodedCredentials}`)
      .set('Content-Type', 'application/json');

    return this.http.get(url, { headers });
  }

  getOfferById(id: string): Observable<any> {
    let url = `api/api/7/offer/${id}`;

    const headers = new HttpHeaders()
      .set('Authorization', `Basic ${this.encodedCredentials}`)
      .set('Content-Type', 'application/json');

    return this.http.get(url, { headers });
  }
}
