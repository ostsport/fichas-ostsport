import { Component, OnInit } from '@angular/core';

import { FichasService } from '../../../services/fichas.service';
import { Ficha } from '../../../interfaces/ficha.interface';
import { Router} from '@angular/router';

@Component({
  selector: 'app-tabla-fichas',
  templateUrl: './tabla-fichas.component.html',
  styles: []
})
export class TablaFichasComponent implements OnInit {

  fichas: Ficha[] = [];
  cargando: boolean = true;

  constructor(private fichasService: FichasService,
    private router: Router) { }

  ngOnInit() {
    this.cargarFichas();
  }

  cargarFichas () {
    this.fichasService.getFichas().subscribe( datos => {
      this.fichas = datos;
      this.cargando = false;
    });
  }

  verDetalle (id: string) {
    this.router.navigate(['/ficha', id]);
  }

  borrar (id: string) {
      this.fichasService.borrarFicha(id).subscribe(datos => {
        console.log("Ficha borrada!");
        this.cargarFichas();
      });
  }

}
