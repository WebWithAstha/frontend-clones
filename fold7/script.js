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
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();




//------------------MENU-----------------------

var menu = document.querySelector(".menu")
var menubar = document.querySelector("#menu-page")
var count = 0
menu.addEventListener("click", function () {
    if (count == 0) {
        menubar.style.top = "0%"
        count = 1
        menu.innerHTML = `<i class="ri-close-line"></i>`
      
    }
    else {
        count = 0
        menubar.style.top = "-100%"
        menu.innerHTML = `<i class="ri-menu-fill"></i>`


        
    }
})







var c = document.querySelector(".cursor")

document.querySelectorAll(".agencies").forEach(function(e){
  e.addEventListener("mousemove",function(dets){
    gsap.to(c,{
      x:dets.x,
      y:dets.y 
    })
  })
  e.addEventListener("mouseenter",function(){
    gsap.to(c,{
      opacity:1,
      scale:1,
      rotate:0,
      clipPath:"polygon(0% 0%, 75% 0%, 75% 30%, 100% 30%, 100% 100%, 25% 100%, 25% 70%, 0% 70%)"
    })
  })
  e.addEventListener("mouseleave",function(){
    gsap.to(c,{
      opacity:0,
      scale:0,
    })
  })
  
})

document.querySelector("#agent2").addEventListener("mouseenter",function(){
  gsap.to(c,{
    clipPath:"polygon(0% 30%, 25% 30%, 25% 0%, 100% 0%, 100% 70%, 75% 70%, 75% 100%, 0% 100%)"
  })
})



var tl = gsap.timeline()
tl
.to("#intro-page .num h1",{
    y:"-700%",
    duration:2,
    delay:2
  })
.to("#intro-page",{
  y:"-100%"
})



gsap.to(".h1-div", {
  y: "-60%",
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page1",
    start: "top 0%",
    pin: true,
    scrub: 2,
    end: "top -100%"
  }
})
var p2 = gsap.timeline(
  {
    scrollTrigger: {
      scroller: "#main",
      trigger: "#page2",
      start: "top 0%",
      pin: true,
      scrub: 1,
      end: "top -100%"
    }
  }
)
p2
  .to("#page2>p,#page2 button", {
    y: "-20vh",

  }, "a")
  .from("#page2>video", {
    y: "100%"
  }, "a")
  .to("#page2>p,#page2 button", {
    y: "-150vh",
    duration: 4,
  }, "n")
  .from(".circle", {
    width: 0,
    height: 0,
    top: "100%",
    duration: 4,
  }, "n")

  .from(".circle .text,.videos", {
    y: "200vh",
    duration: 8,
  }, "n")
  .to("#page2 .circle", {
    borderRadius: "0"
  })

var p4 = gsap.timeline(
  {
    scrollTrigger: {
      scroller: "#main",
      trigger: "#page4",
      start: "top 70%",
      // pin:true,
      scrub: 1,
      // end:"top 250%"
    }
  }
)
p4
  .from("#page4 #part2 .i1", {
    opacity: 0,
  })
  .to("#page4 #part2 .i1", {
    opacity: 0,
  })
  .from("#page4 #part2 .i2", {
    opacity: 0,
  })
  .to("#page4 #part2 .i2", {
    opacity: 0,
  })
  .from("#page4 #part2 .i3", {
    opacity: 0,
  })
  .to("#page4 #part2 .i3", {
    opacity: 0,
  })
  .from("#page4 #part2 .i4", {
    opacity: 0,
  })
  .to("#page4 #part2 .i4", {
    opacity: 0,
  })
  .from("#page4 #part2 .i5", {
    opacity: 0,
  })
  .to("#page4 #part2 .i5", {
    opacity: 0,
  })
  .from("#page4 #part2 .i6", {
    opacity: 0,
  })
  .to("#page4 #part2 .i6", {
    opacity: 0,
  })
  .from("#page4 #part2 .i7", {
    opacity: 0,
  })
  .to("#page4 #part2 .i7", {
    opacity: 0,
  })
  .from("#page4 #part2 .i8", {
    opacity: 0,
  })
  .to("#page4 #part2 .i8", {
    opacity: 0,
  })
  .from("#page4 #part2 .i9", {
    opacity: 0,
  })
  .to("#page4 #part2 .i9", {
    opacity: 0,
  })
  .from("#page4 #part2 .i10", {
    opacity: 0,
  })
  .to("#page4 #part2 .i10", {
    opacity: 0,
  })


var p5 = gsap.timeline(
  {
    scrollTrigger: {
      scroller: "#main",
      trigger: "#page5",
      start: "top 0%",
      pin: true,
      scrub: 1,
      // markers:true,
      end: "top -100%"
    }
  }
)
p5
  .to("#p5-a", {
    top: "10%"
  })
  .to("#p5-b", {
    top: "17%"
  })
  .to("#p5-c", {
    top: "25%"
  })
  .to("#p5-a,#p5-b,#p5-c", {
    top: "0%"
  })

var ft =gsap.timeline(
  {
    scrollTrigger: {
      scroller: "#main",
      trigger: "#p5-c-child",
      start: "top 50%",
      end:"top 36%",
      scrub: 1,
      // markers:true,
      duration:5,
    }
  }
)
ft
.to("#p5-c-child", {
  top: "0%"
})











