let tl = gsap.timeline()

tl.from(".nav", {
    opacity: 0,
    duration: .5,

})
tl.from(".nav h1,.nav h4,.nav h3", {
    y: - 80,
    opacity: 0,
    delay: .5,
    stagger: .3
})
tl.from(".left h1", {
    x: -500,
    opacity: 0,
    duration: .5,
    stagger: .3
})
tl.from(".right img", {
    scale: 2,
    opacity: 0,
    duration: .5
})


gsap.from(".page2 .box", {
    scale: 0,
    opacity: 0,
    duration: 1,
    stagger: .5,
    scrollTrigger: {
        trigger: ".page2 .box",
        scroller: "body",
        markers: true,
        start: "top 70%"
    }
})