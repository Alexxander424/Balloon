

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// ScrollSmoother.create({
//     wrapper: '.wrapper',
//     content: '.content',
//     smooth: 1.2,
//     effects: true
// });


gsap.set(".balloon", {y: '-600'});
gsap.to(".balloon",{
    scrollTrigger: 
    {
        trigger: '.balloon',
        start: '100',
        end: '550',
        scrub: true,
        markers: true
    },
    y: '0',
    opacity: 1
});

let content = document.querySelector(".body");
$(document).ready(function(){
    setTimeout(function(){
        container.scrollTop = container.scrollHeight;
        }, 1);
    });

        $(document).ready(function(){
    setTimeout(function(){
        content.scrollTo(2000, 2000);
        }, 1);
    });
    // $(document).ready(function(){
    //     setTimeout(function(){
    //         content.scrollTo(2000, 2000);
    //         }, 1);
    //     });