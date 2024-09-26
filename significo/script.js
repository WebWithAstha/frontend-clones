gsap.set(".home .text-rows", {
    scale: 10
})

function homeAnimation() {
let clutter = ''
    document.querySelector(`.intro-text`).textContent.split('')
        .forEach(function (letter) {
            clutter += `<span>${letter}</span>`
        })
    document.querySelector(`.intro-text`).innerHTML = clutter
    let tm = gsap.timeline({
        scrollTrigger: {
            scroller: "body",
            trigger: ".home",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
        },
    })


    tm
        .to(".home .video-div", {
            "--clip": "2.4%",
        }, "same")
        .to(".home .text-rows", {
            scale: 1.4
        }, "same")
        .to(".home .video-div", {
            opacity:0,
            duration:.1,
        })
        .from(`.intro-text span`, {
            opacity: 0,
            stagger: .01,
        },"sec")
        .to(".home .text-rows", {
            scale: 1
        },"sec")
        .to(".home .text-rows .lft", {
            x: -50,
        },"sec")
        .to(".home .text-rows .rgt", {
            x: 50,
        },"sec")


}
function horizontalAnimation() {

    gsap.to(".slides", {
        xPercent: -300,
        scrollTrigger: {
            scroller: "body",
            trigger: ".horizontal-container",
            start: "top -10%",
            end: "bottom 100%",
            scrub: 1,
        }
    })

}
function imageAnimation() {
    document.querySelectorAll('.names .member')
        .forEach(function (elem) {
            elem.addEventListener("mousemove", function (dets) {
                gsap.to(elem.querySelector('.img'), {
                    opacity: 1,
                    ease: "linear",
                    duration: .1,
                    x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX)
                })
            })
            elem.addEventListener("mouseenter", function (dets) {
                gsap.to(elem.querySelector('.img'), {
                    opacity: 1,
                    ease: "linear",
                    duration: .1,
                    x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX)
                })
            })
            elem.addEventListener("mouseleave", function (dets) {
                gsap.to(elem.querySelector('.img'), {
                    opacity: 0,
                    ease: "linear",
                    duration: .1,
                })
            })
    })
}
function splitToSpanAndAnimate(parent) {
    // spliting to letter logic
    let clutter = ''
    document.querySelector(`${parent} p`).textContent.split('')
        .forEach(function (letter) {
            clutter += `<span>${letter}</span>`
        })
    document.querySelector(`${parent} p`).innerHTML = clutter

    // animating span
    gsap.from(`${parent} p span`, {
        color: "#e5e5e5",
        stagger: .5,
        scrollTrigger: {
            scroller: "body",
            trigger: `${parent}`,
            start: "top 40%",
            end: "bottom 50%",
            scrub: 1,
        },
    })

}
function rotate() {
    gsap.to('.round img', {
        rotate: 360,
        ease: "linear",
        repeat: -1,
        duration: 10
    })
}
function changeBodyTheme() {
    document.querySelectorAll('.section')
        .forEach(function (section) {
            ScrollTrigger.create({
                scroller: "body",
                trigger: section,
                start: "top 50%",
                end: "bottom 50%",
                onEnter: function () {
                    document.querySelector('body').setAttribute('theme', section.dataset.color)
                },
                onEnterBack: function () {
                    document.querySelector('body').setAttribute('theme', section.dataset.color)
                }
            })
        })
}
if(document.querySelector('body').getBoundingClientRect().width>768) imageAnimation()







homeAnimation()
horizontalAnimation()
splitToSpanAndAnimate(".para1")
splitToSpanAndAnimate(".para2")
rotate()
changeBodyTheme()
