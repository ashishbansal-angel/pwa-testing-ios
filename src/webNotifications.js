import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, isSupported } from 'firebase/messaging';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBncccz4K7fDw3lUpKFnye_rzeAzQ3Ors8",
  authDomain: "nxt-web-dev.firebaseapp.com",
  projectId: "nxt-web-dev",
  storageBucket: "nxt-web-dev.firebasestorage.app",
  messagingSenderId: "696149663994",
  appId: "1:696149663994:web:5102ab8b5a2f8016162943"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

const vapidKey = 'BN1K8xDfaEvoD6sDJTsn1k2sHYL-UvlMEKzdHkbCmacpvdMnh-T5lD59PveBLXccQyTxuIKJJ_-CrP47NU7F2Mo'

const getFirebaseToken = async () => {
  getToken(messaging, { vapidKey: vapidKey }).then((currentToken) => {
    if (currentToken) {
      alert('currentToken: '+currentToken);
      console.log("currentToken", currentToken);
      window.localStorage.setItem('currentToken', currentToken);
    } else {
      alert('No registration token available. Request permission to generate one.');
      console.log('No registration token available. Request permission to generate one.');
    }
  }).catch((err) => {
    alert('currentToken: error '+err);
    console.error('An error occurred while retrieving token. ', err);
  });
};

export const initMessaging1 = async () => {
  alert('varient: 2, FCM Supported : '+await isSupported());
  alert('Notification Supported : '+('Notification' in window));
  if ('Notification' in window) {
    alert('Notification.permission: '+Notification.permission);
    if (Notification.permission === 'granted') {
      getFirebaseToken();
    } else if (Notification.permission === 'denied') {
      console.log('Permission denied');
    } else {
      // await navigator.serviceWorker.register('firebase-messaging-sw.js');
      Notification.requestPermission().then(async (permission) => {
        alert('permission: ' + permission)
        if (permission === 'granted') {
          const registration = await navigator.serviceWorker.ready
          alert('registration:' + registration)
          await registration.showNotification('Notification with ServiceWorker');
            
          // navigator.serviceWorker.ready.then(function(registration) {
          //   registration.showNotification('Notification with ServiceWorker');
          // });
          // navigator.serviceWorker.getRegistrations().then(function(registrations) {
          //   registrations[0].showNotification('Notification with ServiceWorker');
          // });
          getFirebaseToken();
        } else {
          console.log('Notification permission denied.');
        }
      }).catch((error) => {
        console.error('Error requesting notification permission:', error);
      });
    }
  }
};

export const initMessaging = async () => {
  alert('varient: 2, FCM Supported : '+await isSupported());
  alert('Notification Supported : '+('Notification' in window));
  if ('Notification' in window) {
    alert('Notification.permission: '+Notification.permission);
    if (Notification.permission === 'granted') {
      getFirebaseToken();
    } else if (Notification.permission === 'denied') {
      console.log('Permission denied');
    } else {
      // await navigator.serviceWorker.register('firebase-messaging-sw.js');
      Notification.requestPermission().then(async (permission) => {
        alert('permission: ' + permission)
        if (permission === 'granted') {
          const registration = await navigator.serviceWorker.ready
          alert('registration:' + registration)
          await registration.showNotification('Notification with ServiceWorker');
            
          // navigator.serviceWorker.ready.then(function(registration) {
          //   registration.showNotification('Notification with ServiceWorker');
          // });
          // navigator.serviceWorker.getRegistrations().then(function(registrations) {
          //   registrations[0].showNotification('Notification with ServiceWorker');
          // });
          getFirebaseToken();
        } else {
          console.log('Notification permission denied.');
        }
      }).catch((error) => {
        console.error('Error requesting notification permission:', error);
      });
    }
  }
};
