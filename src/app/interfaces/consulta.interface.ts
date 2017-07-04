import { Ficha } from './ficha.interface';

export interface Consulta {

  key$?: string;
  fecha: Date;
  motivo: string;
  idFicha?: string;
  notas?: string;

}
