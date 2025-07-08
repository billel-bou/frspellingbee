
/*let username;
username = window.prompt("What is your username")
document.getElementById("Title").textContent = "Welcome to spelling bee  " + username;
console.log(username) */
let username;
document.getElementById("mySubmit").onclick=function(){
    username=document.getElementById("username").value;
    console.log(username);
}