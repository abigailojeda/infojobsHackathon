import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegionsService {
  constructor(private http: HttpClient) {}

  public token = process.env['TOKEN'];
  public clientId = process.env['CLIENT_ID'];
  public clientSecret = process.env['CLIENT_SECRET'];

  // public token = environment.token;
  // public clientId = environment.clientId;
  // public clientSecret = environment.clientSecret;
  public credentials = `${this.clientId}:${this.clientSecret}`;
  public encodedCredentials = btoa(this.credentials);

  getRegions(): Observable<any> {
    const headers = new HttpHeaders()
      .set('Authorization', `Basic ${this.encodedCredentials}`)
      .set('Content-Type', 'application/json');
    const url = 'api/api/1/dictionary/province?country=es';

    console.log({ headers });
    return this.http.get(url, { headers });
  }
}
