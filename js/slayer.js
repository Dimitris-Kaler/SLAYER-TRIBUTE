//NAVBAR HAMBURGER

const toggleButton=document.getElementsByClassName("toggle-button")[0];
console.log(toggleButton)
const navbarLinks=document.getElementsByClassName("nav-links")[0];
console.log(navbarLinks)


function navbar1(){
    console.log("toggle")
navbarLinks.classList.toggle("active");
}
toggleButton.addEventListener("click",navbar1);

//SHOW PIC FOR SLAYER HTML

var slides=document.getElementById("slides")
var earlyPics=["images/slayer-kids.jfif","images/Slayer-Early-Days-underground.png","images/slayer-early-days.jpg","images/show-hell.jpg"]

var i=0
setInterval(function(){
    if(i===earlyPics.length){
        i=0
    }
    slides.src=earlyPics[i]
    slides.style.backgroundSize="cover"
    i++
    
},2000)








