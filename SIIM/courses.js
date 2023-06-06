function frontend() {
    var frontend = document.getElementById("frontend");
    frontend.style.display = "flex";
    document.getElementById("fullstack").style.display = "none";
    document.getElementById("backend").style.display = "none";
}
function backend() {
    var backend = document.getElementById("backend");
    backend.style.display = "flex"
    document.getElementById("frontend").style.display = "none";
    document.getElementById("fullstack").style.display = "none";
}
function fullstack() {
    var fullstack = document.getElementById("fullstack");
    fullstack.style.display = "flex"
    document.getElementById("frontend").style.display = "flex";
    document.getElementById("backend").style.display = "flex";
    document.getElementById("headfullstack").style.display = "none"
}
// darkmode 
function fireDark(){
    var body=document.querySelector("body");
    
    var card1=document.querySelector(".card1");
    var card2=document.querySelector(".card2");
    var card3=document.querySelector(".card3");
    var card4=document.querySelector(".card4");
    var card5=document.querySelector(".card5");
    var card6=document.querySelector(".card6");
    var card7=document.querySelector(".card7");
    if(checkbox.checked==true){
        body.style.backgroundColor="black"
        body.style.color="text-white"
        body.className="text-white"
        card1.style.backgroundColor="black"
        card1.style.color="white"
        card2.style.backgroundColor="black"
        card2.style.color="white"
        card3.style.backgroundColor="black"
        card3.style.color="white"
        card4.style.backgroundColor="black"
        card4.style.color="white"
        card5.style.backgroundColor="black"
        card5.style.color="white"
        card6.style.backgroundColor="black"
        card6.style.color="white"
        card7.style.backgroundColor="black"
        card7.style.color="white"
    }else{
        body.style.backgroundColor="aliceblue"
        body.style.color="text-dark"
        card1.style.backgroundColor="white"
        card1.style.color="black"
        card2.style.backgroundColor="white"
        card2.style.color="black"
        card3.style.backgroundColor="white"
        card3.style.color="black"
        card4.style.backgroundColor="white"
        card4.style.color="black"
        card5.style.backgroundColor="white"
        card5.style.color="black"
        card6.style.backgroundColor="white"
        card6.style.color="black"
        card7.style.backgroundColor="white"
        card7.style.color="black"
    }
}