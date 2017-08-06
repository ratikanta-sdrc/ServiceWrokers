importScripts('https://www.gstatic.com/firebasejs/4.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.2.0/firebase-messaging.js');

var config = {
    apiKey: "AIzaSyCNWXwSe812qr-1JCNIh0AAaRUFIL12nso",
    authDomain: "pn-demo-9d1aa.firebaseapp.com",
    databaseURL: "https://pn-demo-9d1aa.firebaseio.com",
    projectId: "pn-demo-9d1aa",
    storageBucket: "pn-demo-9d1aa.appspot.com",
    messagingSenderId: "282419781031"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload){
    const title = 'Hello world!';
    const options = {
        body: "Hello"
    };
    return self.registration.showNotification(title, options);
});