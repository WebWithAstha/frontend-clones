let balloonTm = gsap.timeline({
    repeat:-1,
    ease:"linear",
})
balloonTm
.to('.collage .balloon',{
    y:40,
    duration:2
})
.to('.collage .balloon',{
    y:0,
    duration:2
})

let diskTm = gsap.timeline({
    repeat:-1,
    ease:"linear",
})
diskTm
.to('.collage .omlet-disk .disk',{
    rotate:10,
    duration:.7
})
.to('.collage .omlet-disk .disk',{
    rotate:0,
    duration:.1,
    delay:1,
})

let berry1Tm = gsap.timeline({
    repeat:-1,
    ease:"linear",
})
berry1Tm
.to('#page2 .berry1',{
    rotate:40,
    duration:3
})
.to('#page2 .berry1',{
    rotate:0,
    duration:3
})

let berry2Tm = gsap.timeline({
    repeat:-1,
    ease:"linear",
})
berry2Tm
.to('#page2 .berry3,#page2 .berry2',{
    rotate:-40,
    duration:3
})
.to('#page2 .berry3,#page2 .berry2',{
    rotate:0,
    duration:3
})

let svgTm = gsap.timeline({
    repeat:-1,
    ease:"linear",
})
svgTm
.to('#page2 svg',{
    rotateX:-20,
    duration:2
})
.to('#page2 svg',{
    rotateX:0,
    duration:2
})

let page3Tm = gsap.timeline({
    scrollTrigger:{
        trigger:"#page3",
        start:"top 40%",
        end:"bottom bottom",
        scrub:1
    }
})
page3Tm
.from("#page3 #figure-container .img-top",{
    x:-500,
    y:400,
},"same")
.from("#page3 #figure-container .img-bottom",{
    x:-500,
    y:600,
},"same")


gsap.from("#page4 .img-container .hand",{
    x:"60%",
    duration:4,
    scrollTrigger:{
        trigger:"#page4",
        start:"top 20%",
        end:"bottom bottom",
        scrub:1
    }
})
gsap.to("#page5 .diver-wrapper",{
    top:"70%",
    left:"50%",
    scale:.9,
    rotate:-10,
    scrollTrigger:{
        trigger:"#page5 .diver-wrapper",
        start:"top 10%",
        end:"top -100%",
        scrub:1,
    },
    onUpdate:function(){
        if(this.scrollTrigger.progress>.9){
            gsap.to("#page5 .diver-wrapper",{
                height:"22vw",
                duration:.1,
            })

        }else{
            gsap.to("#page5 .diver-wrapper",{
                delay:.5,
                height:"37vw",
            })
        }
    }
})