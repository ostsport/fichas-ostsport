import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Ficha } from '../../interfaces/ficha.interface';
import { FichasService } from '../../services/fichas.service';
import { ConsultasService } from '../../services/consultas.service';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styles: []
})
export class FichaComponent implements OnInit {

  ficha: Ficha = {
    fecha: new Date(),
    nombre: "",
    apellidos: "",
    dni: "",
    edad: 18,
    email: "",
    telefono: "",
    ocupacion: ""
  }
  nuevo: boolean = false;
  id:string;
  cargando: boolean = true;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private fichasService: FichasService,
    private Location: Location,
    private consultasService: ConsultasService) {

      this.activatedRoute.params.subscribe( parametros => {
        this.id = parametros['id'];

        if (this.id !== "nuevo") {
          fichasService.getFicha(this.id).subscribe( datos => {
            this.ficha = datos;

            // Se cargan las consultas
            this.cargarConsultas();

            this.cargando = false;
          });
        } else {
          this.cargando = false;
        }
      });

  }

  ngOnInit() {
  }

  guardar() {

    if (this.id == "nuevo") {

      console.log("Guardando nueva ficha...");
      this.fichasService.nuevaFicha(this.ficha).subscribe( datos => {
          this.router.navigate(['/fichas']);
        },
        error => console.error(error));

    } else {

      console.log("Actualizando ficha...");
      this.fichasService.actualizarFicha(this.ficha, this.id)
        .subscribe( datos => {
            this.router.navigate(['/fichas']);
          },
          error => console.error(error));

    }

  }

  volver () {
    this.Location.back();
  }

  verDetalleConsulta (idConsulta: string) {
    this.router.navigate(['/consulta', this.id, idConsulta]);
  }

  borrarConsulta (id: string) {
      this.consultasService.borrarConsulta(id).subscribe(datos => {
        console.log("Consulta borrada!");
        this.cargarConsultas();
      });
  }

  cargarConsultas () {
    this.consultasService.getConsultasFicha(this.id).subscribe ( datos => {
      this.ficha.consultas = datos;
    });
  }
}
