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

//EARLY DAYS

var slides=document.getElementById("slides")
var earlyPics=["images/slayer-kids.jfif","images/Slayer-Early-Days-underground.png","images/slayer-early-days.jpg","images/show-hell.jpg"]



function displaySlides(slides,arr){
var i=0
setInterval(function(){
    if(i===arr.length){
        i=0
    }
    slides.src=arr[i]
    slides.style.backgroundSize="cover"
    i++
    
},1000)}

displaySlides(slides,earlyPics)

//SHOW NO MERCY ,HAUNTING THE ....1983-86
var slides1=document.getElementById("slides1983_86")
var pics1983_86=["images/hell awaits.jpg","images/show no mercy.jpg","images/HauntingTheChapel.jpg","images/liveUndead.jpg"]
displaySlides(slides1,pics1983_86)

//REIGN IN BLOOD...1986-89
var slides2=document.getElementById("slides1986_89")
var pics1986_89=['images/reign in blood.jpg','images/south of heaven.jpg','images/lombardo.jpg','images/slayer 1988.jpg','images/slayer-reignInblood.jpg']
displaySlides(slides2,pics1986_89)

//SEASONS IN THE ABYSS....1990-93
var slides3=document.getElementById("slides1990_93")
var pics1990_93=["images/seasons in the abyss.jpg",'images/slayer1990.jfif','images/slayerSeasons.jfif','images/1990video.jpg']
displaySlides(slides3,pics1990_93)

//DIVINE INTERVENTION.....1994-00
var slides4=document.getElementById("slides1994_00")
var pics1994_00=["images/divine intervention.jpg","images/diabolus in musica.jpg","images/fucking-slayer.jpg","images/slayer-GettyImages-85233995.jpg"]
displaySlides(slides4,pics1994_00)

//GOD HATE US ALL......2001-05
var slides5=document.getElementById("slides2001-05")
var pics2001_05=['images/god hates us all.jpg','images/slayer2002.jfif','images/king2001.jpg']

displaySlides(slides5,pics2001_05)

//CHRIST ILLUSION .....2006-11
var slides6=document.getElementById("slides2006-11")
var pics2006_11=['images/christ illusion.jpg','images/world painted blood.jpg',"images/Tom-Araya-and-Kerry-King.jpeg",'images/slayer-live.jpg']
displaySlides(slides6,pics2006_11)

//Hannemans death......2011-19
var slides7=document.getElementById("slides2011-19")
var pics2011_19=['images/repentless.png','images/Slayer-Tom-Araya.jpg','images/jeff-dave.jpg','images/jeff.jpg','images/slayer_4.jpg','images/repenteless-concert.webp']
displaySlides(slides7,pics2011_19)



///FADE-IN FADE-OUT EFFECT

let fadeElements=document.querySelectorAll(".fade-out")

console.log(fadeElements)
let options={
    threshold:1,
    rootMargin:"0px 0px -200px 0px"
}
let appearOnBrowser= new IntersectionObserver(function(entries,appearOnBrowser){
    entries.forEach(entry=>{
        if(!entry.isIntersecting){
            return;
        }else{
            entry.target.classList.add("fade-in")
            appearOnBrowser.unobserve(entry.target)
        }
    })
},options)


fadeElements.forEach(element=>{
    appearOnBrowser.observe(element)
})








