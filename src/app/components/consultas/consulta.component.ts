import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ConsultasService } from '../../services/consultas.service';
import { FichasService } from '../../services/fichas.service';
import { Consulta } from '../../interfaces/consulta.interface';
import { Ficha } from '../../interfaces/ficha.interface';


@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styles: []
})
export class ConsultaComponent implements OnInit {

  ficha: Ficha;
  idFicha: string;
  id: string;
  cargando: boolean = true;
  consulta: Consulta = {
    fecha: new Date(),
    motivo: ""
  };

  constructor(private consultasService: ConsultasService,
    private fichasService: FichasService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location) {

      this.activatedRoute.params.subscribe( parametros => {
        let idFicha = parametros['ficha'];
        this.id = parametros['id'];

        // Se cargan los datos de la ficha
        fichasService.getFicha(idFicha).subscribe( datos => {
          this.ficha = datos;
          this.idFicha = idFicha;

          // Si es una nueva consulta, se finaliza la carga de la pantalla
          if (this.id === "nuevo") {
            this.cargando = false;
            this.consulta.idFicha = idFicha;
          }
        });

        if (this.id !== "nuevo") {
          this.consultasService.getConsulta(this.id).subscribe( datos => {
            this.consulta = datos;
            // console.log(this.consulta);
            this.cargando = false;
          });
        }

      });

  }

  ngOnInit() {
  }

  volver () {
    this.location.back();
  }

  guardar() {

    if (this.id == "nuevo") {

      console.log("Guardando nueva consulta...");
      this.consultasService.nuevaConsulta(this.consulta).subscribe( datos => {
          this.router.navigate(['/ficha', this.idFicha]);
        },
        error => console.error(error));

    } else {

      console.log("Actualizando ficha...");
      this.consultasService.actualizarConsulta(this.consulta, this.id)
        .subscribe( datos => {
            this.router.navigate(['/ficha', this.idFicha]);
          },
          error => console.error(error));

    }

  }

}
