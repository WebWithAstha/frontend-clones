gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



var flag=0
document.querySelector(".for-des").addEventListener("mouseenter",function(){
    if(flag===0){
        document.querySelector(".nav-item-hover").style.display="flex"
    }
    else{
        flag=0
        document.querySelector(".nav-item-hover").style.display="none"
    }
})
document.querySelector(".for-des").addEventListener("mouseleave",function(){
 
        document.querySelector(".nav-item-hover").style.display="none"
        // document.querySelector(".nav-item-hover").style.display="flex"

})






var tl =gsap.timeline()


tl.from(".logo",{
    delay:1,
    x:-100,
    // stagger:.6,
    opacity:0,
    scale:0,
  
})

tl.from(".nav2 h3",{
    y:-20,
    opacity:0,
    scale:0,
    stagger:.2,
    // backgroundColor:"red",
})
tl.from("#page1>h3",{
    // delay:1,
    x:100,
    // stagger:.6,
    opacity:0,
    scale:0,
  
})
tl.from(".container .box",{
    y:400,
    opacity:0,
    stagger:.2
    
})
tl.from(".container h1",{
    y:60,
    opacity:0,
    scale:0,
})
tl.from(".container h3",{
    y:-20,
    opacity:0,
    scale:0,
    stagger:.2
})
gsap.to(".strip h3",{
    x:"-200%",
    repeat:-1,
    duration:20,
    // opacity:0,
    // scale:0,
    // stagger:.2
})
gsap.from("#image1 .pic, #image1 .about",{
    x:-100,
    opacity:0,
    stagger:.3,
    // duration:1,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page2 #image1",
        // markers:true,
        start:"top 50%",
        end:"top -50%",
        scrub:2,
        // pin:true
    }
})
gsap.from("#colm2 h2,#colm2 img, #colm2 .about",{
    x:100,
    opacity:0,
    stagger:.1,
    // duration:1,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page2 #image2",
        // markers:true,
        start:"top 110%",
        end:"top -50%",
        scrub:2,
        // pin:true

    }
})
gsap.from("#image2 .pic, #image2 .about",{
    x:-100,
    opacity:0,
    stagger:.3,
    // duration:1,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page2 #image2",
        // markers:true,
        start:"top 70%",
        end:"top -50%",
        scrub:2,
        // pin:true

    }
})
gsap.from("#part2",{
    y:-100,
    opacity:0,
    stagger:.3,
    // duration:1,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page3",
        // markers:true,
        start:"top 0%",
        end:"top -50%",
        scrub:2,
        pin:true

    }
})
gsap.from("#part1",{
    x:-100,
    opacity:0,
    stagger:1,
    // duration:1,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page3",
        // markers:true,
        start:"top 0%",
        end:"top -50%",
        scrub:2,
        // pin:true

    }
})
gsap.from("#part1 button",{
    x:-100,
    scale:0,
    opacity:0,
    stagger:1,
    duration:.1,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page3",
        // markers:true,
        start:"top 0%",
        end:"top -50%",
        scrub:2,
        // pin:true
    }
})
gsap.from("#page4 #rect1",{
    // scale:0,
    x:-200,
    opacity:0,
    // stagger:1,
    duration:.1,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page4",
        // markers:true,
        start:"top 0%",
        end:"top -50%",
        scrub:2,
        pin:true
    }
})
gsap.from("#page4 #rect2",{
    // scale:0,
    y:200,
    opacity:0,
    // stagger:1,
    duration:.1,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page4",
        // markers:true,
        start:"top 0%",
        end:"top -50%",
        scrub:2,
        // pin:true
    }
})
gsap.from("#page4 #rect3",{
    // scale:0,
    x:200,
    opacity:0,
    // stagger:1,
    duration:.1,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page4",
        // markers:true,
        start:"top 0%",
        end:"top -50%",
        scrub:2,
        // pin:true
    }
})
gsap.from("#page4 #rect3, .contentt",{
    scale:0,
    // x:200,
    opacity:0,
    stagger:.3,
    duration:.1,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page4",
        // markers:true,
        start:"top 0%",
        end:"top -50%",
        scrub:2,
        // pin:true
    }
})

gsap.from(".lefth3",{
    y:300,
    opacity:0,
    // stagger:.3,
    // duration:1,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page5",
        // markers:true,
        start:"top 0%",
        end:"top -50%",
        scrub:2,
        // pin:true

    }
})
gsap.from(".righth3",{
    y:-300,
    opacity:0,
    // stagger:.3,
    // duration:1,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page5",
        // markers:true,
        start:"top 0%",
        end:"top -50%",
        scrub:2,
        // pin:true

    }
})
gsap.from("#cont1",{
    y:-100,
    opacity:0,
    // stagger:.3,
    // duration:1,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page5",
        // markers:true,
        start:"top 0%",
        end:"top -50%",
        scrub:2,
        pin:true

    }
})
gsap.from("#cont2 p",{
    y:100,
    opacity:0,
    stagger:1,
    // duration:1,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page5",
        // markers:true,
        start:"top 0%",
        end:"top -50%",
        scrub:2,
        // pin:true

    }
})
gsap.from("#cont2 h2",{
    y:0,
    scale:0,
    opacity:0,
    stagger:1,
    // duration:1,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page5",
        // markers:true,
        start:"top 0%",
        end:"top -50%",
        scrub:2,
        // pin:true

    }
})
gsap.from("#page6 h2,#page6 p ,#page6 input,#page6 button",{
    y:500,
    // scale:0,
    opacity:0,
    stagger:.1,
    // duration:1,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page6",
        // markers:true,
        start:"top 0%",
        end:"top -50%",
        scrub:2,
        pin:true

    }
})
gsap.from("#content-img img",{
    // x:-500,
    scale:0,
    opacity:0,
    // stagger:.1,
    // duration:1,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page6",
        // markers:true,
        start:"top 0%",
        end:"top -50%",
        scrub:2,
        // pin:true

    }
})
gsap.from(".sec",{
    // x:-500,
    scale:0,
    opacity:0,
    stagger:.1,
    // duration:1,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page8",
        // markers:true,
        start:"top 0%",
        end:"top -50%",
        scrub:2,
        pin:true

    }
})
gsap.from("#page9 #section1",{
    x:-500,
    // scale:0,
    opacity:0,
    stagger:.1,
    // duration:1,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page9",
        // markers:true,
        start:"top 30%",
        end:"top 50%",
        scrub:2,
        // pin:true
    }
})
gsap.from(".photo",{
    // y:-100,
    borderRadius:"50%",
    scale:0,
    opacity:0,
    stagger:.3,
    // duration:1,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page9",
        // markers:true,
        start:"top 27%",
        end:"top 60%",
        scrub:2,
        // pin:true
    }
})
gsap.from(".top h2,.top h5",{
    x:-300,
    // scale:0,
    opacity:0,
    // stagger:.3,
    // duration:1,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page9",
        // markers:true,
        start:"top 28%",
        end:"top 60%",
        scrub:2,
        // pin:true
    }
})
gsap.from("#page9 #section2",{
    x:500,
    // scale:0,
    opacity:0,
    // stagger:.1,
    // duration:1,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page9",
        // markers:true,
        start:"top 30%",
        end:"top 50%",
        scrub:2,
        // pin:true
    }
})
gsap.from("#section2 h3,#section2 input,#section2 button",{
    x:300,
    // scale:0,
    opacity:0,
    stagger:.3,
    // duration:1,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page9",
        // markers:true,
        start:"top 28%",
        end:"top 60%",
        scrub:2,
        // pin:true
    }
})
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });