var firebaseConfig = {
    apiKey: "AIzaSyBSpWPzFM4qPRUqnWKTjfFB3Kg3loZxox4",
    authDomain: "let-chat-web-app-eb32a.firebaseapp.com",
    databaseURL: "https://let-chat-web-app-eb32a-default-rtdb.firebaseio.com",
    projectId: "let-chat-web-app-eb32a",
    storageBucket: "let-chat-web-app-eb32a.appspot.com",
    messagingSenderId: "361079847033",
    appId: "1:361079847033:web:76e6717d5092bfe3ef3ca8",
    measurementId: "G-46LFWFHP94"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function Log_in() {
    user_name = document.getElementById("room_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
}