import { Injectable } from '@angular/core';
import { Configuration,OpenAIApi,CreateCompletionRequest } from 'openai';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {
  openai: OpenAIApi;
  coverLetter: any = '';

  constructor() {
    // Crear una instancia de OpenAIApi utilizando tu clave de API
    this.openai = new OpenAIApi(new Configuration({
      apiKey: environment.openAiKey
    }));
  }

  async getCoverLetter(description:any, skills?:any) {
    try {
      const prompt = `Por favor generauna carta de presentación para ${description}`;
      const completionRequest: CreateCompletionRequest = {
        model: 'text-davinci-003',
        prompt,
        max_tokens: 2000
      };
      const response = await this.openai.createCompletion(completionRequest);
  
      this.coverLetter = response.data.choices[0].text;
      console.log(this.coverLetter)
    } catch (error) {
      console.error('Error al generar la carta de presentación:', error);
    }
  }
  
  
}