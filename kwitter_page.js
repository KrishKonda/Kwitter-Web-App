//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCLyGed1vYD3F0pgMR0NEF84Rp8hbW_vCw",
      authDomain: "kwitter-5f50b.firebaseapp.com",
      databaseURL: "https://kwitter-5f50b-default-rtdb.firebaseio.com",
      projectId: "kwitter-5f50b",
      storageBucket: "kwitter-5f50b.appspot.com",
      messagingSenderId: "831410111564",
      appId: "1:831410111564:web:be1895f768776b9f2be0e9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
           name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}