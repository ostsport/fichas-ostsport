import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

import { Consulta } from '../interfaces/consulta.interface';

@Injectable()
export class ConsultasService {

  consultasUrl: string = "https://fichas-ostsport-1e7a7.firebaseio.com/consultas.json";
  consultaUrl: string = "https://fichas-ostsport-1e7a7.firebaseio.com/consultas/";
  cargando: boolean = false;

  constructor(private http:Http) { }

  nuevaConsulta (consulta: Consulta) {
    let body = JSON.stringify(consulta);
    let headers = new Headers({
      'Content-type': 'application/json'
    });

    return this.http.post(this.consultasUrl, body, {headers}).map(res => {
      console.log(res.json());
      return res.json();
    })
  }

  actualizarConsulta (consulta: Consulta, id: string) {
    let body = JSON.stringify(consulta);
    let headers = new Headers({
      'Content-type': 'application/json'
    });

    let url = `${this.consultaUrl}/${id}.json`;

    return this.http.put(url, body, {headers}).map(res => {
      console.log(res.json());
      return res.json();
    });
  }

  getConsulta (id: string) {
    let url = `${this.consultaUrl}/${id}.json`;
    return this.http.get(url).map( res => res.json());
  }

  getConsultas () {
    return this.http.get(this.consultasUrl).map(res => res.json());
  }

  borrarConsulta (id: string) {
    let url = `${this.consultaUrl}/${id}.json`;
    return this.http.delete(url).map(res => res.json());
  }

  isCargando():boolean {
    return this.cargando;
  }

  getConsultasFicha(idFicha: string) {
    let url = `${this.consultasUrl}?orderBy="idFicha"&equalTo="${idFicha}"`;
    return this.http.get(url).map(res => res.json());
  }

}
