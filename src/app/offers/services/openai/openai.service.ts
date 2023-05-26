import { Injectable } from '@angular/core';
import { Configuration, OpenAIApi, CreateCompletionRequest } from 'openai';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OpenaiService {
  openai: OpenAIApi;
  coverLetter: any = '';
  private openAiApiKey = environment.openAiKey;
  //private openAiApiKey = process.env['OPENAI_API_KEY'];

  constructor(private http: HttpClient) {
    // Crear una instancia de OpenAIApi utilizando tu clave de API
    this.openai = new OpenAIApi(
      new Configuration({
        apiKey: environment.openAiKey
       // apiKey: process.env['OPENAI_API_KEY']
      })
    );
  }

  getCoverLetter(offer: any): Observable<string> {
    const prompt = `Por favor, redacta una carta de presentación para ${offer.title}, que ofrecen un trabajo con esta descripción: ${offer?.description} y solicitan estos requisitos: ${offer?.minRequirements} sin faltas de ortografía`;
    const completionRequest: CreateCompletionRequest = {
      model: 'text-davinci-003',
      prompt,
      max_tokens: 2000,
    };

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${this.openAiApiKey}`);

    return this.http
      .post<any>('https://api.openai.com/v1/completions', completionRequest, {
        headers,
      })
      .pipe(
        map((response) => response.choices[0].text),
        catchError((error) => {
          console.error(error);
          throw new Error(
            'Se produjo un error al generar la carta de presentación'
          );
        })
      );
  }
}
