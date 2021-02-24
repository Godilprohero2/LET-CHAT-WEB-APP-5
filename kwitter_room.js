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
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names)
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+ Room_names +("</div><hr>")
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name) {
      console.log(name)
      localStorage.setItem("room_name", name)
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location = "kwitter.html";
}