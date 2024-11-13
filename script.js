let cursor=document.querySelector(".cursor");
let cursorCircle=document.querySelector(".cursor-circle");
let nav = document.querySelectorAll("#nav h4");
nav.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        cursor.style.scale=3,
        cursor.style.border="1px solid white",
        cursor.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        cursor.style.scale=1,
        cursor.style.border="0px solid #95c11e",
        cursor.style.backgroundColor="#95c11e"
    })
})

document.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x + "px"
    cursor.style.top = dets.y + "px"
    cursorCircle.style.left = dets.x - 150 + "px"
    cursorCircle.style.top = dets.y -150 + "px"  
})

gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"100px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start: "top -1%",
        end: "top -13%",
        scrub:1
    }
})

gsap.to("main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"main",
        scroller:"body",
        start:"top -30%",
        end:"top -100%",
        scrub:2
    }
})

gsap.from(".about-us img,.about",{
    y:80,
    opacity:0,
    duration:0.9,
    scrollTrigger:{
        trigger:".about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 50%",
        scrub:3
    }
})

gsap.from(".cards-container",{
    y:40,
    opacity:0,
    duration:0.9,
    scrollTrigger:{
        trigger:".cards-container",
        scroller:"body",
        start:"top 60%",
        end:"top 50%",
        scrub:3
    }
})

