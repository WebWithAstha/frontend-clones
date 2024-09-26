function loco(){
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
  
} 
loco();
$('#page1 h1').textillate({ in: { effect: 'fadeIn' } });
gsap.to("#page1 h1,#page1 h3",{
  opacity:0,
  scrollTrigger:{
    trigger:"#page1",
    scroller:"#main",
    start:"top 0%",
    end:"top -80%",
    scrub:2,
    // markers:true
  } 
})
gsap.from("#page2 .p2box",{
  opacity:0,
  scrollTrigger:{
    trigger:"#page2",
    scroller:"#main",
    start:"top 55%",
    end:"top -100%",
    // markers:true
  } 
})

gsap.from("#page3 h1",{
  y:50,
  scale:0,
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#main",
    start:"top 65%",
    end:"top -100%",
    // markers:true
  } 
})
gsap.from("#page4 h4,#page4 .p4box",{
  opacity:0,
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
    start:"top 65%",
    end:"top -100%",
  } 
})
