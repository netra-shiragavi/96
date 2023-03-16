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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   room_names = childKey;
  //Start code
   console.log("Room name - " + room_names);
   row = "<div class='room_name' id="+room_name+" onclick='redirectToRoomName(this.id)' ># "+room_names+"</div><hr>";
   document.getElementById("output").innerHTML += row;
  //End code
  });});}
getData();

function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location = "kwitter_page.html";
  database.setItem("message").value = "";
  database.setItem("message").innerHTML = "";
}

function redirectToRoomName()
{
  console.log(name);
  localStorage.setItem("room_name", name);
  winddows.location="kwitter_page.html";
}

function logout()
{
  window.location="index.html";
}
    