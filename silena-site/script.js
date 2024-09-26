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
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(`#main`).style.transform ? `transform` : `fixed`
});





tlm=gsap.timeline(
)
tlm
.to("#opening-ani img",{
  opacity:1
})
.from("#opening-ani h1",{
  opacity:0,
  duration:1,
})
.to("#opening-ani h1",{
  opacity:0,
  scale:0.9,
})
.to("#opening-ani img",{
  opacity:0
})
.to("#opening-circle",{
  scale:0,
})
.to("#opening-ani",{
  scale:0,
})

tlm2=gsap.timeline()

document.querySelector(".menu").addEventListener("click",function(){

  tlm2.to(".mcircle",{
    zIndex:200,
    scale:555,
    backgroundColor:"#655b50"
  })
  tlm2.to("#menucontent",{
    opacity:1,
    display:"flex",
    scale:1
  })
  tlm2.to("#menucontent h2",{
    y:0,
  })
  tlm2.from("#menucontent .close,.mgrass",{
    opacity:0,
  })
  tlm2.to("#menucontent h2",{
    y:0,
    opacity:1,
  })
  tlm2.to("#menucontent img",{
    opacity:1,
  })
})
document.querySelector(".close").addEventListener("click",function(){
  
  tlm.to("#menucontent h2",{
    y:300,
    stagger:.15,
    opacity:0,
  },"m1")
  tlm.to("#menucontent .close,.mgrass",{
    opacity:0,
  },"m1")
  tlm.to(".mcircle",{
    scale:1,
    backgroundColor:"#3d2e199e"
  })
  tlm.to("#menucontent",{
    scale:0,
  })  
})









var arr = [
  { pic: "images/csm_16-Silena-Soulful-Hotel-Vals-Suedtirol_bb89811c9d.jpg.webp", h1Left: "SILENA, YOUR SOULFUL HOTEL", pLeft: "COME AS YOU ARE. BE AS YOU ARE. BREATHE IN. BREATHE OUT. YOU ARE HELD WHEN YOU’RE WITH US. WITH A FRIENDLY SMILE. WITH A SYMPATHETIC EAR. IN AN ENVIRONMENT THAT OFFERS COUNTLESS OPPORTUNITIES.", pRight: "You have consciously taken time for yourself. Time for a break. Everything you need for this time is you. We provide the framework. Rituals from South-East Asia, culinary impulses from South Tyrol, pure nature outside of your door, a warm spa area or books from all over the world. As soon as you are here with us, you can allow yourself to just enjoy as you leave your daily life behind. Let go, close your eyes and let yourself fall.", h3Right: "SILENA, YOUR SOULFUL HOTEL" },
  { pic: "images/csm_HQ-Unikateur-HotelSilena-_Tiberio-Sorvillo_63A7875_c393824e40.jpg.webp", h1Left: "SOUTH TYROL & SOUTH-EAST ASIA", pLeft: "EVERYTHING IN THE WORLD HAS ITS NECESSARY OPPOSITE. THE SILENA AS WELL CONSISTS OF TWO CONTRASTING CULTURES: SOUTH TYROL AND SOUTH-EAST ASIA.", pRight: "Our name as well, SILENA, is also a joining of opposites. It is a melding of the first names of the host siblings SImon and MagdaLENA. Indeed, their worlds could not be more different. Simon is deeply rooted in his home of South Tyrol. For generations, his ancestors have lived in the alpine region Rio di Pusteria. Magdalena loves to travel and lost her heart in South-East Asia. This is how the hotel presents itself: deeply-rooted with wings. Yin and yang.", h3Right: "SOUTH TYROL & SOUTH-EAST ASIA" },
  { pic: "images/csm_220808_SILENA_PR-130_1eec9a78c9.jpg.webp", h1Left: "ONSEN POOL ON THE ROOFTOP", pLeft: "FLOAT ABOVE IT ALL. FEEL THE FREEDOM OF IMMERSING YOURSELF IN 40-DEGREE WATER. YOU’VE ARRIVED. THE WATER AND WARMTH CONVEY A FEELING OF WEIGHTLESSNESS, ALLOWING YOU TO BE IN THE HERE AND NOW.", pRight: "In many areas of Japan, bathing in an onsen pool is regarded as a common courtesy. After accomplishing the day’s work, people wash themselves and sit together in the warmth of 40-degree water. Our onsen pool is located on the rooftop. Follow the Japanese tradition and bathe in South Tyrolean spring water as you gaze out onto the mountains. Feel your body warming and relaxing. Come to yourself in the onsen pool.", h3Right: "ROOFTOP ONSEN POOL" },
  { pic: "images/csm_CZ4B6080_4680d9605a-kettle.jpg.webp", h1Left: "TEA AS SOULFUL AS YOU", pLeft: "TEA, LIKE A CORDIAL WELCOMING GREETING, WARMS YOU WHEN YOU’RE COLD AND COOLS YOU WHEN YOU’RE WARM. TEA HAS A CERTAIN MAGICAL QUALITY.", pRight: "With us you can get to know the world of tea ceremonies and rituals. We interpret these, as so often, as a merging of South Tyrolean and South-East Asian culture. You can choose what works best for you. We offer teas made from the herbs of the South Tyrolean mountains served in traditional South Tyrolean tea sets. Or you can embark on a magical journey to the Far East with tea and ceramics from Asia.", h3Right: "TEA" },
]
var clutter = ``
arr.forEach(function (elem, index) {
  clutter += `<div id="page${index}" class="page">
                            <div class="transparent">
                              <div id ="sticker">
                                  <img src="images/silena-kreis470.png" alt="">
                              </div>
                                  <div class="gol">
                                      <img src="${elem.pic}" alt="">
                                  </div>
                            </div>
                           <div id="content-left" class="text content-left">
                                 <h1>${elem.h1Left}</h1>
                                <p>${elem.pLeft}</p>
                            </div>
                            <div id="content-right" class="text content-right">
                              <p>${elem.pRight}</p>
                              <h3>${elem.h3Right}</h3>
                            </div>
                      </div>`
})
document.querySelector("#main-js").innerHTML = clutter

tl0=gsap.timeline(
  {
    scrollTrigger: {
      scroller: "#main",
      trigger: "#page0",
      start: "top 0%",
      end: "top -50%",
      scrub: 2,
      pin: true
    }
  }
)

tl0
.to(".logo img",{
  scale:0,
  opacity:0,
})
.to("#page0 .gol", {
  overflow: "hidden",
  width: "25vw",
  height: "25vw",
  
})
.from("#page0 .text", {
  y: 100,
  opacity: 0,

},"p0")
.from("#page0 #sticker", {
  opacity: 0,

},"p0")
tl2=gsap.timeline(
  {
    scrollTrigger: {
      scroller: "#main",
      trigger: "#page1",
      start: "top 0%",
      end: "top -50%",
      scrub: 2,
      pin: true
    }
  }
)

tl2
.to("#page1 .gol", {
  overflow: "hidden",
  width: "25vw",
  height: "25vw",
  
})
.from("#page1 .text", {
  y: 100,
  opacity: 0,

},"p1")
.from("#page1 #sticker", {
  opacity: 0,

},"p1")

tl2=gsap.timeline(
  {
    scrollTrigger: {
      scroller: "#main",
      trigger: "#page2",
      start: "top 0%",
      end: "top -50%",
      scrub: 2,
      pin: true
    }
  }
)

tl2
.to("#page2 .gol", {
  overflow: "hidden",
  width: "25vw",
  height: "25vw",
  
})
.from("#page2 .text", {
  y: 100,
  opacity: 0,

},"p2")
.from("#page2 #sticker", {
  opacity: 0,

},"p2")


tl3=gsap.timeline(
  {
    scrollTrigger: {
      scroller: "#main",
      trigger: "#page3",
      start: "top 0%",
      end: "top -50%",
      scrub: 2,
      pin: true
    }
  }
)

tl3
.to("#page3 .gol", {
  overflow: "hidden",
  width: "25vw",
  height: "25vw",
  
})
.from("#page3 .text", {
  y: 100,
  opacity: 0,

},"p3")
.from("#page3 #sticker", {
  opacity: 0,

},"p3")

gsap.to("#page5-cover", {
  transform: "translateY(-100%)",
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page5",
    start: "top 0%",
    end: "top -50%",
    scrub: 2,
    pin: true
  }
})
tm6=gsap.timeline(
  {
    scrollTrigger: {
      scroller: "#main",
      trigger: "#page6",
      start: "top 0%",
      end: "top -50%",
      scrub: 1,
      pin: true
    }
  }
)
tm6
.to("#page6 svg",{
  scale:75,
})
.to("#page6 h1",{
  color:"#d6c7a4",
  // scale:0,
},"p6")
.from(".still-img",{
  scale:0,
},"p6")
.from(".right-text",{
  opacity:0,
  y:400
},"p6")

var p7arr =[
  {img7:"images/dada3a89513ed942d25aa33ce1d9cd6d.webp",h1:"HONEYMOON - RELAX AND SIT BACK"},
  {img7:"images/21cd30f53d5df1012834764f5351e8f1.webp",h1:"BABYMOON @ SILENA"},
  {img7:"images/aa7b9724af54a6e33c3325de53e6c2d3.webp",h1:"HONEYMOON - I'M YOUR YIN AND YOU'RE MY YANG"},
  {img7:"images/dc84ab864602ff58537765bf018e159e.webp",h1:"YOGA, BABY!"},
  {img7:"images/28f44e1f060d493b1f329f6e6de2e450.webp",h1:"CHRISTMAS AT SILENA"},
  {img7:"images/c6ffcfb574d136608a389cc6103d3940.webp",h1:"SOULFUL EASTER"}
]
var clutter1 =``
p7arr.forEach(function(el,i){
  clutter1+=`<hr id="${i}">`
})
document.querySelector(".line").innerHTML=clutter1

var tl7=gsap.timeline()
document.querySelector(".line").addEventListener("click",function(dets){
  tl7.from("#page7 .circle,h1,h4,h3",{
    scale:0,
    opacity:0
  })
  document.querySelector("#page7 .circle img").setAttribute("src",`${p7arr[dets.target.id].img7}`)
  document.querySelector("#page7 h1").textContent= `${p7arr[dets.target.id].h1}`
  setTimeout(() => {
    tl7.to("#page7 .circle,h1,h4,h3",{
      scale:1
    })
    
  }, 2000);
})