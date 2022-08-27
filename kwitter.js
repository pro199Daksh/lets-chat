function login(){
    user= document.getElementById("userName").value;
    localStorage.setItem("userN", user);
    window.location= "kwitter_room.html";
}