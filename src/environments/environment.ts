// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    baseUrl: 'https://gtfotoangular.firebaseio.com',
    registrationUrl: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser',
    loginUrl: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword',
    apiKey: 'AIzaSyD3RYHLuefd0mn6mCkKwPNc4xxen2xcHjM',
    authDomain: 'https://gtfotoangular.firebaseio.com',
    databaseURL: 'https://gtfotoangular.firebaseio.com',
    projectId: 'gtfotoangular',
    storageBucket: 'gtfotoangular.appspot.com',
    messagingSenderId: '1073579308136'
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
