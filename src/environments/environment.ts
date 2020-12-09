// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //Con este script podemos conectarnos a firebase 
  firebaseConfig : {
    apiKey: "AIzaSyDugQgm8ZTo_wZKZAxnoO6rh8_klDiozc4",
    authDomain: "agenciamovil-68d5c.firebaseapp.com",
    projectId: "agenciamovil-68d5c",
    storageBucket: "agenciamovil-68d5c.appspot.com",
    messagingSenderId: "472956304162",
    appId: "1:472956304162:web:40fe5bc7d4e9c680c7837b"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
