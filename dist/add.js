"use strict";gsap.registerPlugin(ScrollTrigger,ScrollSmoother),gsap.set(".balloon",{y:"-600"}),gsap.to(".balloon",{scrollTrigger:{trigger:".balloon",start:"100",end:"550",scrub:!0,markers:!0},y:"0",opacity:1});var o=document.querySelector(".body");$(document).ready((function(){setTimeout((function(){container.scrollTop=container.scrollHeight}),1)})),$(document).ready((function(){setTimeout((function(){o.scrollTo(2e3,2e3)}),1)}));