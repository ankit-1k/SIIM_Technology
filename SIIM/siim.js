function fireDark() {
    var checkbox = document.getElementById("checkbox");
    var bg_dark=document.querySelector(".darkMode");
    var card_1=document.querySelector(".card-1");
    var card_2=document.querySelector(".card-2");
    var card_3=document.querySelector(".card-3");
    if (checkbox.checked === true) {
        bg_dark.style.backgroundColor="black";
        bg_dark.style.color="white";
        card_1.style.color="white"
        card_1.style.backgroundColor="black"
        card_2.style.color="white"
        card_2.style.backgroundColor="black"
        card_3.style.color="white"
        card_3.style.backgroundColor="black"
    } else {
        var bg_dark=document.querySelector(".darkMode");
        bg_dark.style.backgroundColor="white";
        bg_dark.style.color="black";
        card_1.style.color="black"
        card_1.style.backgroundColor="white"
        card_2.style.color="black"
        card_2.style.backgroundColor="white"
        card_3.style.color="black"
        card_3.style.backgroundColor="white"
    }
}