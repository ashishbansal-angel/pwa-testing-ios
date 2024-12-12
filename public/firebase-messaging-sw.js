/* eslint-disable no-undef */
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

self.addEventListener('install', () => {
  self.skipWaiting();
});

const app = firebase.initializeApp({
  apiKey: "AIzaSyBncccz4K7fDw3lUpKFnye_rzeAzQ3Ors8",
  authDomain: "nxt-web-dev.firebaseapp.com",
  projectId: "nxt-web-dev",
  storageBucket: "nxt-web-dev.firebasestorage.app",
  messagingSenderId: "696149663994",
  appId: "1:696149663994:web:5102ab8b5a2f8016162943"
});
const messaging = firebase.messaging(app);



messaging.onBackgroundMessage((payload) => {
  console.log('Background message hit');
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

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
    const url = 'https://uat-nxt.angelone.in/nxt/dashboard';
    // event.waitUntil(
    //   // clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
    //   //   // if (clientList?.length > 0) {
    //   //   //   // return clients.openWindow(url);
    //   //   //   return clientList[0].focus();
    //   //   // }
    //   //   return clients.openWindow(url);
    //   // }),
    // );
    return clients.openWindow(url);
});

self.addEventListener('message', (event) => {
	if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});