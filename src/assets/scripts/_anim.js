import gsap from 'gsap'

const logo = document.getElementById("logo");
const tale = document.getElementById("tale");
const body = document.getElementById("body");
const lid = document.querySelectorAll(".lid");
const eye = document.querySelectorAll(".eye");

let tl = new TimelineMax({
  repeat: -1,
  yoyo:true

})

tl.set([lid,eye], {
  transformOrigin: 'center'
})
tl.set(tale, {
  transformOrigin: "100% 100%"
})
tl.to(tale, 1, {
  rotation: 60,
  yoyo:true
})
tl.to([lid,eye], 1, {
  scaleY: 0,
  ease: Power2.easeIn
})
