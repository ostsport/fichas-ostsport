import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

import { Ficha } from '../interfaces/ficha.interface';

@Injectable()
export class FichasService {

  fichasUrl: string = "https://fichas-ostsport-1e7a7.firebaseio.com/fichas.json";
  fichaUrl: string = "https://fichas-ostsport-1e7a7.firebaseio.com/fichas/";
  cargando: boolean = false;

  constructor(private http:Http) {

  }

  nuevaFicha (ficha: Ficha) {
    let body = JSON.stringify(ficha);
    let headers = new Headers({
      'Content-type': 'application/json'
    });

    return this.http.post(this.fichasUrl, body, {headers}).map(res => {
      console.log(res.json());
      return res.json();
    })
  }

  actualizarFicha (ficha: Ficha, id: string) {
    let body = JSON.stringify(ficha);
    let headers = new Headers({
      'Content-type': 'application/json'
    });

    let url = `${this.fichaUrl}/${id}.json`;

    return this.http.put(url, body, {headers}).map(res => {
      console.log(res.json());
      return res.json();
    });
  }

  getFicha (id: string) {
    let url = `${this.fichaUrl}/${id}.json`;
    return this.http.get(url).map( res => res.json());
  }

  getFichas () {
    return this.http.get(this.fichasUrl).map(res => res.json());
  }

  borrarFicha (id: string) {
    let url = `${this.fichaUrl}/${id}.json`;
    return this.http.delete(url).map(res => res.json());
  }

  buscarFicha (texto: string):Ficha[] {
    let fichasArray: Ficha[] = [];
    texto = texto.toLowerCase();
    this.cargando = true;

    this.getFichas().subscribe( datos => {
      for (let clave in datos) {
        let ficha = datos[clave];
        if (ficha.nombre.toLowerCase().indexOf(texto) >= 0
        || ficha.apellidos.toLowerCase().indexOf(texto) >= 0
        || ficha.dni.toLowerCase().indexOf(texto) >= 0
        || ficha.telefono.toLowerCase().indexOf(texto) >= 0) {
          ficha.key$ = clave;
          fichasArray.push(ficha);
        }
      }
      this.cargando = false;
    });

    return fichasArray;
  }

  isCargando():boolean {
    return this.cargando;
  }
}
