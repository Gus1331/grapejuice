let badgeText0 = document.getElementById("badgeText0");
let badgeText1 = document.getElementById("badgeText1");
let badgeText2 = document.getElementById("badgeText2");
let badgeIcon0 = document.getElementById("badgeIcon0");
let badgeIcon1 = document.getElementById("badgeIcon1");
let badgeIcon2 = document.getElementById("badgeIcon2");
let screen = document.getElementById("screen");
let screen0 = document.getElementById("screen0");
let screen1 = document.getElementById("screen1");
let imgA = document.getElementById("imgA");
let imgB = document.getElementById("imgB");

function screenClose(){
    screen.style.display = "none";
    screen0.style.display = "none";
    screen1.style.display = "none";
}
function screenOn0(){
    screen.style.display = "block";
    screen0.style.display = "block";
}
function screenOn1(){
    screen.style.display = "block";
    screen1.style.display = "block";
}

function badgeEffect0(){
    badgeText0.style.transform = "translateX(98%)";
    badgeText0.style.color = "var(--black)";
}
function badgeEffect1(){
    badgeText1.style.transform = "translateX(49%)";
    badgeText1.style.color = "var(--black)";
    badgeIcon1.style.transform = "translateX(-49%)";
}
function badgeEffect2(){
    badgeText2.style.color = "var(--black)";
    badgeIcon2.style.transform = "translateX(-98%)";
}
function badgeOff(){
    badgeText0.style.transform = "translateX(0)";
    badgeText0.style.color = "rgba(0, 0, 0, 0)";
    badgeText1.style.transform = "translateX(0)";
    badgeText1.style.color = "rgba(0, 0, 0, 0)";
    badgeText2.style.transform = "translateX(0)";
    badgeText2.style.color = "rgba(0, 0, 0, 0)";
    badgeIcon0.style.transform = "translateX(0)";
    badgeIcon1.style.transform = "translateX(0)";
    badgeIcon2.style.transform = "translateX(0)";
}

function imgPosition0(){
    imgA.style.transform = "translateX(0)";
    imgB.style.transform = "translateX(0)";
}
function imgPosition1(){
    imgA.style.transform = "translateX(-100%)";
    imgB.style.transform = "translateX(-100%)";
}
function imgPosition2(){
    imgA.style.transform = "translateX(-200%)";
    imgB.style.transform = "translateX(-200%)";
}









