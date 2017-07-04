import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router} from '@angular/router';

import { FichasService } from '../../services/fichas.service';
import { Ficha } from '../../interfaces/ficha.interface';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {

  texto: string = "";
  fichas: Ficha[] = [];
  filtroVacio: boolean = true;

  constructor(private fichasService: FichasService,
    private router: Router) { }

  ngOnInit() {
  }

  buscar () {
    this.filtroVacio = false;
    this.fichas = this.fichasService.buscarFicha(this.texto);
  }

  limpiar () {
    this.texto = "";
    this.fichas = [];
    this.filtroVacio = true;
  }

  verDetalle (id: string) {
    this.router.navigate(['/ficha', id]);
  }

  borrar (id: string) {
      this.fichasService.borrarFicha(id).subscribe(datos => {
        console.log("Ficha borrada!");
        // this.cargarFichas();
      });
  }

}
