import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncar'
})
export class TruncarPipe implements PipeTransform {

  transform(valor: any, args?: any): any {
    let limite = args ? parseInt(args, 10) : 10;
    let puntos = '...';

    return valor.length > limite ? valor.substring(0, limite) + puntos : valor;
  }

}
