import { Injectable } from '@angular/core';

//Importamos los modulos de firebase para hacer la conexión y la interfaz que creamos
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FormularioI } from './../Modelos/formulario.interface';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  //Trabajaremos con una colección de tipo angularfirestore que guardara formularios como el de la interfaz
  private formularioCollection: AngularFirestoreCollection<FormularioI>;

  constructor(private afs:AngularFirestore) { 
    this.formularioCollection=afs.collection<FormularioI>('formularios');
  }

  guardarFormulario(newFormulario:FormularioI):void{
    this.formularioCollection.add(newFormulario);
  }
}
