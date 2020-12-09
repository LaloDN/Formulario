import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Para crear los formularios es IMPORTANTE el modulo de reactiveforms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioPageRoutingModule } from './formulario-routing.module';

import { FormularioPage } from './formulario.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FormularioPage]
})
export class FormularioPageModule {}
