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



var tt=gsap.timeline()
tt
.from("#navbar",{
  opacity:0,
  y:"-100%",
  duration:1
})
.from("#page1 h1",{
  opacity:0,
  duration:1
})


function cursor() {


  const c = document.querySelector("#cursor")
  document.addEventListener("mousemove", function (dets) {
    gsap.to(c, {
      x: dets.x,
      y: dets.y
    })
    document.querySelectorAll("h1").forEach(function (e) {
      e.addEventListener("mouseenter", function () {
        gsap.to(c, {
          width: "5vw",
          height: "5vw",
          mixBlendMode: "difference"
        })
      })
      e.addEventListener("mouseleave", function () {
        gsap.to(c, {
          width: ".1vw",
          height: ".1vw",
          mixBlendMode: "normal"

        })
      })
    })
    document.querySelector("#page3 .container").addEventListener("mouseenter", function () {
      c.innerHTML = `scroll<i class="ri-arrow-right-line"></i>`
      gsap.to(c, {
        width: "10vw",
        height: "10vw",
        backgroundColor: "#ffffffa0"

      })
    })
    document.querySelector("#page3 .container").addEventListener("mouseleave", function () {
      c.innerHTML = ""
      gsap.to(c, {
        width: ".1vw",
        height: ".1vw",
        backgroundColor: "#ffffff"
      })
    })

  })
}
cursor()

document.querySelector("#page2 video").playbackRate = 3.5;

gsap.from("#page4 .img", {
  scale: 0,
  x: 1000,
  duration: 2,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page4",
    start: "top 10%",
    end: "top -50%",
    pin: true,
  }
})



gsap.from("#page4 .topstrip h2", {
  x: "-100%",
  repeat: -1,
  duration: 5,
  ease: "linear",
})
gsap.from("#page4 .bottomstrip h2", {
  x: "100%",
  repeat: -1,
  duration: 5,
  ease: "linear",
})


