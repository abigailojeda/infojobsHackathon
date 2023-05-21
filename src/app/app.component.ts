import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private http: HttpClient) { }
  public token ="ZmYyZDc4YTEyNzRjNGY4MGJkYjgyYjA0ZDdkYzY4OTM6IERCYzdEdFVBY0FFWjJKeEw5UEtYK2tadUhmZXdETjlpbjljYTkrQ3ZXcHg5N24vdWpo"

  ngOnInit() {
    this.fetchData();
  }
  getJobOffers() {
    const apiKey = 'ff2d78a1274c4f80bdb82b04d7dc6893'; // Reemplaza 'TU_CLAVE_DE_API' con tu clave de API de Infojobs
    const url = `https://api.infojobs.net/api/7/offer?category=informatica-telecomunicaciones`;
    //const headers = new HttpHeaders().set('Authorization', `Basic ${this.token}`).set('apikey', apiKey);
  
    this.http.get(url, { headers:{
      'Content-type' : 'application/json',
      Authorization : `Basic ${this.token}`
    } }).subscribe((response) => {      console.log(response); // Aquí puedes manejar la respuesta de la API
    });
  }
  
  fetchData() {
    const apiKey = 'ff2d78a1274c4f80bdb82b04d7dc6893'; // Reemplaza 'TU_CLAVE_DE_API' con tu clave de API de Infojobs
    const url = `https://api.infojobs.net/api/7/offer?category=informatica-telecomunicaciones`;
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${this.token}`,
      'apikey': apiKey
    };
  
    fetch(url, { headers })
      .then(response => response.json())
      .then(data => {
        console.log(data); // Aquí puedes manejar la respuesta de la API
      })
      .catch(error => {
        console.error('Ha ocurrido un error', error);
      });
  }
    
}
