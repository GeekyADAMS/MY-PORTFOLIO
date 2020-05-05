<template>
  <div class="container viewport">
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

export default {
  components: {
    Hero,
    About
  },
  created () {
  }
}
</script>

<style>
*, :after, :before {
    box-sizing: border-box;
}

p::selection{
  background: var(--pink);
}
button:focus{
  outline: none;
}
  .green-line-1{
    background: var(--bright-green);
  }
  html{
    scroll-behavior: smooth;
  }
  body{
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: scroll;
    cursor: url('~@/assets/images/icons/custom-mouse-32.svg'), auto;
    scroll-behavior: smooth;
    background: var(--purple);
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
        width: 10px;
      }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
    border-radius: 25px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: rgb(2,0,36);
    background: linear-gradient(135deg, rgba(2,0,36,1) 0%, var(--light-purple) 35%, var(--bright-green) 100%);
    border-radius: 50px;
    height: 40px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgb(2,0,36);
    background: linear-gradient(135deg, rgba(2,0,36,1) 0%, var(--light-purple) 35%, var(--bright-green) 100%);
  }
</style>
