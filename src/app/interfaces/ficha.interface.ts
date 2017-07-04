import { Consulta } from './consulta.interface';

export interface Ficha {

  key$?: string;
  fecha: Date;
  nombre: string;
  apellidos: string;
  dni: string;
  telefono: string;
  email?: string;
  edad: number;
  direccion?: string;
  ocupacion?: string;
  consultas?: Consulta[];

}
