
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCHMUDOL3ngRXhv62MK4vd57GL6pDgJ6Ao",
      authDomain: "kwitter-878df.firebaseapp.com",
      databaseURL: "https://kwitter-878df-default-rtdb.firebaseio.com",
      projectId: "kwitter-878df",
      storageBucket: "kwitter-878df.appspot.com",
      messagingSenderId: "825750984842",
      appId: "1:825750984842:web:a2060253987d25a9c7f573",
      measurementId: "G-7VYVZPT2WK"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
