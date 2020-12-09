import { NumberSymbol } from '@angular/common';

export interface FormularioI{
    nombre: string;
    apellidos: string;
    genero: string;
    correo: string;
    telefono: string;
    ciudad: string;
    colonia: string;
    calle: string;
    nointerno: number;
    noexterno: number;
    pais: string;
    modelo: string;
    version: string;
    color: string;
    kilometraje: number;
    precio: string;
    mensaje:string;
    foto: File;
}