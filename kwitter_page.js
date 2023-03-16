var firebaseConfig = {
    apiKey: "AIzaSyAJHmXTuUQwOl_1dZU2RWk_wXgRnfJM2Ws",
    authDomain: "netra-ee113.firebaseapp.com",
    databaseURL: "https://netra-ee113.firebaseio.com",
    projectId: "netra-ee113",
    storageBucket: "netra-ee113.appspot.com",
    messagingSenderId: "94425444721",
    appId: "1:94425444721:web:50c052c1759a754a0486d0",
    measurementId: "G-M76EX003Q8"
  };
  firebase.initializeApp(firebaseConfig);

  function send(){
    message = document.getElementById("msg").value;
    console.log("message"+  message);
    firebase.database().ref(room_name).push({
        name:user_name,
        message:message,
        like:0
    });
    database.getElementById("msg").value = "";
    database.getElementById("msg").innerHTML = "";

  }

  function back(){
    window.location="kwitter_room.html";
  }

  room_name = location.getItem("Room_name");
  user_name = location.getItem("user_name");

  console.log("room_name"+room_name);
  console.log("user_name"+user_name);

  
  function getData() {firebase.database().ref("/" + room_name).on('value', function(snapshot) {document.getElementById().innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    firebase_message_id = childKey;
    message_data = childData;
   //Start code
    
   //End code
   });});}
getData();

