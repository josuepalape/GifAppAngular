import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Gifs, SearchGiphyReponse } from '../interfaces/Ghipsy.interface';
@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial:Array<string> = [];
  private apiKey : string = environment.apiKeyGiphy;
  private apiUrl : string = environment.apiUrlGiphy;
  private limite : number = 10;
  public resultados:Array<Gifs> = [];

  constructor(private http: HttpClient ){
    if(localStorage.getItem('historial')){
      this._historial = JSON.parse(localStorage.getItem('historial')!);
    }
  }

  get historial():Array<string>{
    return [...this._historial];
  }

  buscarGifs(valor:string){
    valor = valor.trim().toLocaleLowerCase();
    if(!this._historial.includes(valor)){
      this._historial.unshift(valor);
      localStorage.setItem('historial',JSON.stringify(this.historial))
    }
    
    this.http.get<SearchGiphyReponse>(`${this.apiUrl}/search?api_key=${this.apiKey}&q=${valor}&limit=${this.limite}`).subscribe((response:any) =>{
      console.log(response);  
      this.resultados = response.data;
      localStorage.setItem('resultados',JSON.stringify(this.resultados))
    })
  }

 
}
