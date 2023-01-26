import { Component, ViewChild,ElementRef } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {

  @ViewChild('txtbuscar') txtbuscar!:ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService){};

  buscar():void{
    let valor = this.txtbuscar.nativeElement.value.trim();
    this.gifsService.buscarGifs(valor);
    console.log(this.txtbuscar.nativeElement.value);
    this.txtbuscar.nativeElement.value = '';
  }

  

}
