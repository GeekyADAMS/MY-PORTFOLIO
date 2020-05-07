<template>
  <div class="container viewport" id="view-port">
    <div class="flex-col a-c fixed socials hide-mobile">
      <a href="https://www.linkedin.cn/in/geeky-adams" target="_blank"><img src="~@/assets/images/icons/linkedin.svg" alt="linkedin icon" class="scale-on-hover"></a>
      <a href="https://www.twitter.com/CocaCoder" target="_blank"><img src="~@/assets/images/icons/twitter.svg" alt="twitter icon" class="scale-on-hover"></a>
      <a href="https://www.github.com/GeekyADAMS" target="_blank"><img src="~@/assets/images/icons/github.svg" alt="github icon" class="scale-on-hover"></a>
      <div class="green-line-1" />
    </div>
    <Hero />
    <Body />
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'
import Body from '~/components/Body.vue'

export default {
  components: {
    Hero,
    Body
  },
  created () {
  }
}
</script>

<style>
.socials{
  z-index: 1200;
}

*, :after, :before {
  box-sizing: border-box;
}
html{
  width: 100vw;
  max-width: 100vw;
  overflow-x: hidden;
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
    overflow-x: hidden;
    overflow-y: scroll;
    cursor: url('~@/assets/images/icons/custom-mouse-32.svg'), auto;
    scroll-behavior: smooth;
    background: var(--purple);
    box-sizing: border-box;
    max-width: 100vw;
  }
  .view-port{
    max-width: 100vw;
    overflow-x: hidden;
    width: 100vw;
  }
   ::-webkit-scrollbar-track {
       background: transparent;
    }
    ::-webkit-scrollbar {
        width: 10px;
    } 
@media screen and (max-width: 600px) {
    ::-webkit-scrollbar {
      width: 0px;
    }
      ::-webkit-scrollbar-track {
        display: none;
    }
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
