    gsap.registerPlugin(ScrollTrigger);
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(`#main`),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on(`scroll`, ScrollTrigger.update);
    // tell ScrollTrigger to use these proxy methods for the `#main` element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(`#main`, {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(`#main`).style.transform ? `transform` : `fixed`
    });
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener(`refresh`, () => locoScroll.update());
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

locoScroll.stop()



gsap.to("#page1 .text",{
    top:"100%",
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page1",
        start:"top 0%",
        end:"top -80%",
        scrub:1
    }
})

gsap.to(`#page2 .text`,{
    top:"100%",
    y:"0%",
    scrollTrigger:{
        scroller:"#main",
        trigger:`#page2`,
        start:"top 90%",
        end:"top -180%",
        scrub:1
    }
})

gsap.to(`#page3 .text`,{
    top:"100%",
    y:"0%",
    scrollTrigger:{
        scroller:"#main",
        trigger:`#page3`,
        start:"top 60%",
        end:"top -180%",
        scrub:1
    }
})
gsap.to(`#page4 .text`,{
    top:"100%",
    y:"0%",
    scrollTrigger:{
        scroller:"#main",
        trigger:`#page4`,
        start:"top 70%",
        end:"top -180%",
        scrub:1
    }
})
gsap.to(`#page5 .text`,{
    top:"40%",
    y:"0%",
    scrollTrigger:{
        scroller:"#main",
        trigger:`#page5`,
        start:"top 20%",
        end:"top -10%",
        scrub:1
    }
})


function splitToSpan(item) {
    let clutter = ''
    document.querySelector(`${item}`).textContent.split("").forEach(function (letter, i, a) {
        if (letter === ' ') {
            clutter += `<span class="inline-block md:mr-6 mr-2 start">${letter}</span>`
        }
        if (i <= Math.floor(a.length / 2)) {
            clutter += `<span class="inline-block start">${letter}</span>`
        } else {
            clutter += `<span class="inline-block end">${letter}</span>`
        }
    })
    document.querySelector(`${item}`).innerHTML = clutter
}

splitToSpan('#loader h1')
splitToSpan('#page1 .first')
splitToSpan('#page1 .second')

// loader animation

let tm = gsap.timeline(
    {
        onComplete:()=>{locoScroll.start()}
    }
)
tm
    .from('#loader h1 .start', { y: 200, stagger: .1, duration: .4,delay:1 }, "span")
    .from('#loader h1 .end', { y: 200, stagger: -.1, duration: .4,delay:1 }, "span")

    .from('.loader-bg-img', { scale: 0, duration: .5 }, "one")
    .from('.loader-bg-img img:nth-child(1)', { opacity: 0 }, "one")

    .to('.loader-bg-img', { backgroundColor: "#edcf9f" }, "two")
    .to('.loader-bg-img img:nth-child(1)', { opacity: 0, duration: .5 }, "two")

    .to('.loader-bg-img', { width: "34rem", height: "20rem" }, "three")
    .from('.loader-bg-img img:nth-child(2)', { opacity: 0 }, "three")
    .from('nav', { scaleX:0 ,duration:2}, "three")

    .to('.loader-bg-img', { backgroundColor: "#0e5549", width: "21rem", height: "26rem" }, "four")
    .to('.loader-bg-img img:nth-child(2)', { opacity: 0, duration: .5 }, "four")

    .from('.loader-bg-img img:nth-child(3)', { opacity: 0, duration: .5 }, "four")

    .to('#loader h1 .start', { y: -200, stagger: .015, duration: .4 }, "span2")
    .to('#loader h1 .end', { y: -200, stagger: -.015, duration: .4 }, "span2")

    .to('.loader-bg-img img:nth-child(3)', { opacity: 0, duration: .3 }, "five")
    .to('.loader-bg-img', { backgroundColor: "#e7ca5c", duration: .5 }, "five")
    .from('.loader-bg-img img:nth-child(4)', { opacity: 0, duration: .5 }, "six")

    .to('.loader-bg-img', {
        width: "100%", height: "100vh",
        onComplete: () => { document.querySelector('#main').removeChild(document.querySelector("#loader")) }
    }, "six")
    .from("nav .nav-items:nth-child(1)", { scaleX:0}, "seven")
    .from("nav .nav-items:nth-child(1)", { color:"transparent"}, "eight")
    .to("nav h4", { color:"white"}, "eight")
    .to("nav", {pointerEvents:"all"}, "eight")
    .from("#page1 .first span", { y: 200, stagger: .1 }, "nine")
    .from("#page1 .second span", { y: 200, stagger: -.1 }, "nine")
    .from("#page1 .text", {pointerEvents:"none"})


    // list hover logic


document.querySelectorAll(".item").forEach(function (element) {
    element.addEventListener("mouseenter", handleMouse);
    element.addEventListener("mouseleave", handleMouse);

    function handleMouse(dets) {
        const origin = dets.target.clientHeight - dets.offsetY < dets.target.clientHeight / 2 ? "bottom" : "top";
        this.querySelector('.overlay').style.transformOrigin = origin;
    }
});