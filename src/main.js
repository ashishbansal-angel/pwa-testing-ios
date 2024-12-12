import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'

createApp(App).mount('#app')


const registerServiceWorker = () => {
    navigator?.serviceWorker?.register(`firebase-messaging-sw.js`).then((registration) => {
      console.log('Firebase Service Worker registered with scope:', registration?.scope);
      console.log("registration", registration);
      // Check if the service worker is already active
      if (registration.active) {
        // sendMessageToSW(registration.active);
      } else if (registration.installing || registration.waiting) {
        // Wait for the service worker to activate
        const sw = registration.installing || registration.waiting;
        sw.addEventListener('statechange', (event) => {
          if (sw.state === 'activated') {
            console.log("event", event);
          }
        });
      }
    }).catch((error) => {
      console.error('Service Worker registration failed:', error);
    });
  };
  
  if ('serviceWorker' in navigator) {
    navigator?.serviceWorker?.getRegistration(`firebase-messaging-sw.js`).then((existingRegistration) => {
      if (existingRegistration && existingRegistration.active) {
        existingRegistration?.unregister().then(() => {
          registerServiceWorker();
        }).catch((error) => {
          console.error('Failed to unregister existing service worker:', error);
        });
      } else {
        registerServiceWorker();
      }
    }).catch((error) => {
      console.error('Error while checking for existing service worker:', error);
    });
  }
  
