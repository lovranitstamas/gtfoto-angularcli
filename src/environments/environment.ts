// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    baseUrl: 'https://gt-foto-angular-89a91.firebaseio.com',
    registrationUrl: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser',
    loginUrl: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword',
    apiKey: 'AIzaSyApjuFGtviNvs00DVSsmLr1W5QTXuJ3zg8',
    authDomain: 'https://gt-foto-angular-89a91.firebaseio.com',
    databaseURL: 'https://gt-foto-angular-89a91.firebaseio.com',
    projectId: 'gt-foto-angular-89a91',
    storageBucket: 'gt-foto-angular-89a91.appspot.com',
    messagingSenderId: '893050496463'
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
