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


gsap.to(".strip img", {
  x: "-100%",
  scrollTrigger: {
    scroller: "#main",
    trigger: ".strip",
    scrub: 2,
    start: "top 0%",
    end: "top -1000%",
    // markers:true
  },
})




var tl2 = gsap.timeline(
  {
    repeat: -1,
  }

)
tl2

  // ---------

  .from("#img-show .glitch5", {
    duration: .05,
    opacity: 0,
  })
  .to("#img-show .glitch5", {
    duration: .05,
    opacity: 0,
  })
  .from("#img-show .i5", {
    opacity: 0,

  })
  .to("#img-show .i5", {
    delay: 2,
    opacity: 0,
  })
  // ---------

  .from("#img-show .glitch4", {
    duration: .05,
    opacity: 0,
  })
  .to("#img-show .glitch4", {
    duration: .05,
    opacity: 0,
  })
  .from("#img-show .i4", {
    opacity: 0,

  })
  .to("#img-show .i4", {
    delay: 2,
    opacity: 0,
  })
  // ---------

  .from("#img-show .glitch3", {
    duration: .05,
    opacity: 0,
  })
  .to("#img-show .glitch3", {
    duration: .05,
    opacity: 0,
  })
  .from("#img-show .i3", {
    opacity: 0,

  })
  .to("#img-show .i3", {
    delay: 2,
    opacity: 0,
  })
  // ---------

  .from("#img-show .glitch2", {
    duration: .05,
    opacity: 0,
  })
  .to("#img-show .glitch2", {
    duration: .05,
    opacity: 0,
  })
  .from("#img-show .i2", {
    opacity: 0,

  })
  .to("#img-show .i2", {
    delay: 2,
    opacity: 0,
  })
  // ---------

  .from("#img-show .glitch1", {
    duration: .05,
    opacity: 0,
  })
  .to("#img-show .glitch1", {
    duration: .05,
    opacity: 0,
  })
  .from("#img-show .i1", {
    opacity: 0,

  })
  .to("#img-show .i1", {
    delay: 2,
    opacity: 0,
  })








gsap.to(".moving-text h4", {
  x: "-100%",
  repeat: -1,
  ease: "linear",
  duration: 9
})



var tl3 = gsap.timeline()
tl3

  .to(".start-gif", {
    delay: .5,
    display: "none"
  })

  .from(".part1", {
    height: "1000vh",
    duration: 1
  })
  .from(".part1", {
    width: "100vw",
  }, "e")
  .to(".part2", {
    x: "0%",
  }, "e")
  .from("#img-show", {
    opacity: 0,
  })



function pageMove() {



  var tl = gsap.timeline(
    {
      scrollTrigger: {
        scroller: "#main",
        trigger: "#page3",
        start: "top 0%",
        end: "top -250%",
        pin: true,
        scrub: 2

      }
    }
  )
  tl
    .to(".main-absolute-2", {
      top: "0%",
      duration: 1

    }, "a")
    .to("#main-absolute-1", {
      top: "0%",
      duration: 1

    }, "a")
    .to(".main-absolute-2", {
      y: "-85%",
      duration: 5
    })

}
function cardsMove() {
  const columns = [".colm1", ".colm2", ".colm3", ".colm4"];
  const xValues = [200, -200, 200, -200];

  columns.forEach((col, index) => {
    gsap.from(`.main-absolute-2 ${col} img`, {
      x: xValues[index],
      stagger: 0.4,
      y: 50,
      duration: 1,
      scrollTrigger: {
        scroller: "#main",
        trigger: `.main-absolute-2 ${col}`,
        start: "top 96%",
        end: "top -5%",
        scrub: 2,
      },
    });
  });
}


if (document.querySelector("body").getBoundingClientRect().width > 1000) {
  pageMove();
}else{
  
  cardsMove()
}




document.querySelectorAll(".container").forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    elem.childNodes[3].childNodes[1].childNodes[1].play()
  })
})
document.querySelectorAll(".container").forEach(function (elem) {
  elem.addEventListener("mouseleave", function () {
    elem.childNodes[3].childNodes[1].childNodes[1].pause()
  })
})

document.querySelectorAll(".question").forEach(function (elem) {
  var flag = 0
  elem.addEventListener("click", function () {
    if (flag == 0) {
      elem.childNodes[3].style.display = "block"
      flag = 1

    } else {
      elem.childNodes[3].style.display = "none"
      flag = 0

    }
    console.log(elem.childNodes[3])
  })
})
