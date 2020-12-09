import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//Improtación de los modulos del provider firebase y el modulo de forms
import { AngularFireModule } from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { environment } from './../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
//Importamos tambien el servicio que creamos para la conexión con firebase
import { ConexionService } from './formulario/conexion.service';

//Aquí utilizamos el provider de la geolocalización
import { Geolocation } from '@ionic-native/geolocation/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
            //Aquí vamos a inyectar los modulos de firebase para usarlos en nuestro proyecto
            AngularFireModule.initializeApp(environment.firebaseConfig),
            AngularFirestoreModule,
            ReactiveFormsModule
          ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    //Nuestro servicio para la conexión de la base será inyectado como proveedor
    ConexionService,
    //Tambien metemos la geolocalización como proveedor
    Geolocation
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
