import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, isSupported } from 'firebase/messaging';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6w6x3cgPxcYNXPFx4c9U988-uaZ4VJ04",
  authDomain: "pwa-testing-ios.firebaseapp.com",
  projectId: "pwa-testing-ios",
  storageBucket: "pwa-testing-ios.firebasestorage.app",
  messagingSenderId: "311184862052",
  appId: "1:311184862052:web:21a0a1308261f216962871"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

const vapidKey = 'BGpYZ6q_aK9P2BuVqhI9pJ6W6pWcMpM3txiRmZjBFBGrtryTTk4CCZYbCnRRQeX0gPek2auaOQ2SO8t0JXHwzKA'

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
