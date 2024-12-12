/* eslint-disable no-undef */
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

self.addEventListener('install', () => {
  self.skipWaiting();
});

const app = firebase.initializeApp({
  apiKey: "AIzaSyC6w6x3cgPxcYNXPFx4c9U988-uaZ4VJ04",
  authDomain: "pwa-testing-ios.firebaseapp.com",
  projectId: "pwa-testing-ios",
  storageBucket: "pwa-testing-ios.firebasestorage.app",
  messagingSenderId: "311184862052",
  appId: "1:311184862052:web:21a0a1308261f216962871"
});
const messaging = firebase.messaging(app);



messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationData = payload?.data;
  const notificationTitle = notificationData?.nt;
  const notificationOptions = {
    body: notificationData?.nm,
    icon: "https://d2u8j8b25aupc8.cloudfront.net/assets/icons/logo.svg",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener('message', (event) => {
	if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});