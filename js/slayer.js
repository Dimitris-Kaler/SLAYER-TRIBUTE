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


///MODAL FOR IMAGES

var modal = document.getElementById("myModal");
var images=document.getElementsByClassName("gal")
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var close=document.getElementsByClassName("close")[0]

let display=(event)=>{
modal.style.display="block"
modalImg.src=event.target.src
captionText.innerHTML = event.target.alt;
}

for(img of images){
    img.addEventListener("click",display)
}


function closeFunction(){
    modal.style.display="none"
}

close.addEventListener("click",closeFunction)