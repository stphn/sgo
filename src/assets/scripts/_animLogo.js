var controller = new ScrollMagic.Controller();
const header = document.querySelector(".header")
const logo = document.querySelector(".hero__logo")
const desc = document.querySelector(".hero__description")
const bgImage = document.querySelector(".hero__inner")

let headerTween = TweenMax.to( header, .5,{
  css: {
    opacity:1,
    transform: 'translateY(0)'
  }
})

let logoTween = TweenMax.fromTo( logo, 5,
	{css: {
    opacity:1,
    transform: 'translateY(0)'
  }},
	{css: {
    opacity:0,
    transform: 'translateY(100px)'
  }, repeat: 0, yoyo: false, ease: Power2.easeOut}
);

let logoDescTween = TweenMax.fromTo( desc, 5,
	{css: {
    opacity:1,
    transform: 'translateY(0)'
  }},
	{css: {
    opacity:0,
    transform: 'translateY(50px)'
  }, repeat: 0, yoyo: false, ease: Power2.easeOut}
);

let bgImageTween = TweenMax.fromTo( bgImage, 5,
	{css: {
    opacity:1,
    transform: 'translateY(0)'
  }},
	{css: {
    opacity:0,
    transform: 'translateY(50px)'
  }, repeat: 0, yoyo: false, ease: Power2.easeOut}
);
// build scene
var scene01 = new ScrollMagic.Scene({
  triggerElement: "#trigger1",
  duration: 200,
  offset: -50
})
.setClassToggle( header, "header--animated")
.setTween(headerTween)
.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)

var scene02 = new ScrollMagic.Scene({
  duration: 300,
  offset: 0
})
//.setPin("#logoSVG", {pushFollowers: false})
.setClassToggle( logo , "hero__logo--animated")
.setTween(logoTween)
.addIndicators({name: "logoSVG (duration: 600)"}) // add indicators (requires plugin)

var scene03 = new ScrollMagic.Scene({

  duration: 300,
  offset: 0
})
//.setPin("#logoSVG", {pushFollowers: false})
.setClassToggle( desc, "logo__description--animated")
.setTween(logoDescTween)
.addIndicators({name: "logoSVG (duration: 600)"}) // add indicators (requires plugin)

var scene04 = new ScrollMagic.Scene({

  duration: 300,
  offset: 0
})
//.setPin("#logoSVG", {pushFollowers: false})
.setClassToggle( bgImage, "hero__inner--animated")
.setTween(bgImageTween)
.addIndicators({name: "logoSVG (duration: 600)"}) // add indicators (requires plugin)



// Add Scenes to ScrollMagic Controller
controller.addScene([
  scene01,
  scene02,
  scene03,
  scene04
])
