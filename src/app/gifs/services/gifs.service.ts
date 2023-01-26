import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial:Array<string> = [];

  get historial():Array<string>{
    return [...this._historial];
  }

  buscarGifs(valor:string){
    this._historial.unshift(valor);
    console.log(this._historial);
  }

  constructor() { }
}
