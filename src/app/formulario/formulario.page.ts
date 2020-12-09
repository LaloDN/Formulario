import { Component, OnInit } from '@angular/core';

//Importamos nuestro servicio para lo conexión y los modulos de forms
import { ConexionService } from './conexion.service';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'formularioForm',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  //Aquí guardaremos nuestro formulario, sera de tipo FormGroup
   formularioForm:FormGroup;

  //Utilizaremos el ngONInit como un método que nos devuelva un formulario que creemos
  ngOnInit() {
    return new FormGroup({
      nombre: new FormControl('',[Validators.required,Validators.minLength(2)]),
      apellidos: new FormControl('',[Validators.required,Validators.minLength(5)]),
      genero: new FormControl('',Validators.required),
      correo: new FormControl('',[Validators.required,Validators.pattern('^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$')]),
      telefono: new FormControl('',[Validators.required,Validators.minLength(10)]),
      ciudad: new FormControl('',[Validators.required,Validators.minLength(5)]),
      calle: new FormControl('',[Validators.required,Validators.minLength(5)]),
      colonia: new FormControl('',[Validators.required,Validators.minLength(5)]),
      nointerno: new FormControl(''),
      noexterno: new FormControl('',[Validators.required,Validators.minLength(3)]),
      pais: new FormControl('',[Validators.required,Validators.minLength(4)]),
      modelo: new FormControl('',[Validators.required,Validators.minLength(5)]),
      version: new FormControl('',[Validators.required,Validators.minLength(5)]),
      color: new FormControl('',[Validators.required,Validators.minLength(3)]),
      kilometraje: new FormControl('',[Validators.required,Validators.minLength(2)]),
      precio: new FormControl('',[Validators.required,Validators.minLength(5)]),
      mensaje: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(500)]),
      foto: new FormControl('',Validators.required),
    });
  }

    //Esto lo ocupamos para el *ngIF, obtenemos su valor y si es válido o no
    get nombre(){return this.formularioForm.get('nombre');}
    get apellidos(){return this.formularioForm.get('apellidos');}
    get genero(){return this.formularioForm.get('genero');}
    get correo(){return this.formularioForm.get('correo');}
    get telefono(){return this.formularioForm.get('telefono');}
    get ciudad(){return this.formularioForm.get('ciudad');}
    get calle(){return this.formularioForm.get('calle');}
    get colonia(){return this.formularioForm.get('colonia');}
    get nointerno(){return this.formularioForm.get('nointerno');}
    get noexterno(){return this.formularioForm.get('noexterno');}
    get pais(){return this.formularioForm.get('pais')}
    get modelo(){return this.formularioForm.get('modelo');}
    get version(){return this.formularioForm.get('version');}
    get color(){return this.formularioForm.get('color');}
    get kilometraje(){return this.formularioForm.get('kilometraje');}
    get precio(){return this.formularioForm.get('precio');}
    get mensaje(){return this.formularioForm.get('mensaje');}
    get foto(){return this.formularioForm.get('foto')}

  //Aquí tambien inyectamos nuestro servicio de conexión para pasarle el formulario que acabamos de llenar
  constructor(private conex:ConexionService) { 
    this.formularioForm=this.ngOnInit();
  }


  //Con este método guardaremos el formulario
  onSaveForm(){
    if(this.formularioForm.valid){
    console.log('DATOS GUARDADOS',this.formularioForm.value);
    this.conex.guardarFormulario(this.formularioForm.value);
    alert('Su solicitud de cambio de auto ha sido procesada con éxito, se le enviará una respuesta a su correo eléctornico, ahora será redirigido a la página de inicio');
    }
    else{
      alert('Algo ha salido mal, compruebe que ha introducido todos los datos corretamente.');
      console.log('INVALIDO');
    }

  }

}

