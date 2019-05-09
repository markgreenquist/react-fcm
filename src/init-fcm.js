import * as firebase from 'firebase/app';
import 'firebase/messaging';

const initializedFirebaseApp = firebase.initializeApp({
  messagingSenderId: '231775446200'
});

const messaging = initializedFirebaseApp.messaging();

messaging.usePublicVapidKey(
  'BFRA2LibasWbW4ahGNnon2KwnH0mEg_FGrktVGtcyQtkSrmchlb_t4oReYhGd8s874me0rXqtXAyyBjYlVhWWEA'
);

export { messaging };
