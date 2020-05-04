<template>
  <div class="container">
    <div class="flex-col a-c fixed socials">
      <img src="~@/assets/images/icons/linkedin.svg" alt="linkedin icon">
      <img src="~@/assets/images/icons/twitter.svg" alt="twitter icon">
      <img src="~@/assets/images/icons/github.svg" alt="github icon">
      <div class="green-line-1" />
    </div>
    <Hero />
    <About />
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'
import About from '~/components/About.vue'

const html = document.documentElement
const body = document.body

const scroller = {
  target: document.querySelector('#scroll-container'),
  ease: 0.05,
  endY: 0,
  y: 0,
  resizeRequest: 1,
  scrollRequest: 0
}

let requestId = null
window.addEventListener('load', onLoad)

function onLoad () {
  updateScroller()
  window.focus()
  window.addEventListener('resize', onResize)
  document.addEventListener('scroll', onScroll)
}

function updateScroller () {
  const resized = scroller.resizeRequest > 0

  if (resized) {
    const height = scroller.target.clientHeight
    body.style.height = height + 'px'
    scroller.resizeRequest = 0
  }

  const scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0
  scroller.endY = scrollY
  scroller.y += (scrollY - scroller.y) * scroller.ease

  if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
    scroller.y = scrollY
    scroller.scrollRequest = 0
  }

  requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null
}

function onScroll () {
  scroller.scrollRequest++
  if (!requestId) {
    requestId = requestAnimationFrame(updateScroller)
  }
}

function onResize () {
  scroller.resizeRequest++
  if (!requestId) {
    requestId = requestAnimationFrame(updateScroller)
  }
}

export default {
  components: {
    Hero,
    About
  }
}
</script>

<style>
button:focus{
  outline: none;
}
  .socials>div{
    height: 6rem;
    width: 2px;
  }
  .socials>img{
    width: 1.2rem;
    height: 1.2rem;
    margin-bottom: .5rem;
  }
  .socials>img:hover{
    color: var(--pink);
  }
  .socials{
    bottom: 0;
    left: 1.5rem;
  }
  .green-line-1{
    background: var(--bright-green);
  }
  html{
    scroll-behavior: smooth;
  }
  body{
    width: 100vw;
    overflow-x: hidden;
    cursor: url('~@/assets/images/icons/custom-mouse-32.svg'), auto;
  }
</style>
