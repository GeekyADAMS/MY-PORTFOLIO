<template>
    <div class="hero w100 h100 flex-col a-c-n mouse hide-overflow fixed">
        <div class="cursor">
            <div class="cursor__ball cursor__ball--big ">
                <svg height="30" width="30">
                <circle cx="15" cy="15" r="12" stroke-width="0"></circle>
                </svg>
            </div>
            
            <div class="cursor__ball cursor__ball--small">
                <svg height="10" width="10">
                <circle cx="5" cy="5" r="4" stroke-width="0"></circle>
                </svg>
            </div>
        </div>
        <Header />
        <div class="hero-texts flex-row flex-col-m w95 h100 ml-13 ml-5-m mt-3 space-btw">
            <div class="flex-col">

                <h1 class="montserrat no-select bold" id="hero-title" data-aos="fade-down-right" data-aos-duration="1000">
                    <span class="gb" style="z-index:50; margin-bottom: 15rem;">Web &<br>Mobile Dev.</span><br>
                </h1>
                <h1 class="montserrat no-select mt-2" id="hero-title"  data-aos="fade-up" data-aos-duration="1200">
                    <span class="pink mb-2" style="z-index:10; line-height: 1.8rem;">UI Designer.</span><br>
                </h1>
                <h1 class="montserrat no-select mt-2" id="hero-title" data-aos="fade-up" data-aos-duration="1500">
                    <span class="bright-green" style="z-index:5;line-height: 1.8rem;">Project<br>Manager.</span><br>
                </h1>
                <p class="hindu white mt-4 desc-text"  data-aos="fade-up" data-aos-duration="1700">Hi there. You are awesome and i am, well, i am Adams. <wbr> Building the next $billion <span class="pink">DODO inspired solutions.</span></p>

                <div class="flex-row a-c-n hero-btns mt-3">
                    <div class="hindu fade-9 round-edge-btn pink-bg flex-row pad-all-btn contact-btn mouse-focus hoverable" @click="playIntro()"><span style="font-size: 1.1rem;">Hear me out</span> <img src="~@/assets/images/icons/play-circle.svg" alt="arrow mouse-focus" class="ml-1 scale-on-hover"></div>
                    <a href="#about" class=""><img src="~@/assets/images/icons/down-arrow-btn.svg" alt="down-arrow" class="ml-2 down-btn mouse-focus"></a>
                </div>
                <audio src="/audio/Intro.m4a" ref="intro"></audio>

            </div>
            <img src="~@/assets/images/illustrations/Coding 1.svg" alt="" class="no-select no-drag" data-aos="fade-up"  data-aos-duration="1600">
        </div>
    </div>
</template>

<script>
import Header from '~/components/Header.vue'

export default {
  components: {
    Header
  },
  methods: {
    playIntro () {
      this.$refs.intro.play()
    }
  }
}
</script>

<style scoped>

body .cursor {
pointer-events: none;
}
body .cursor__ball {
    position: fixed;
    top: 0;
    left: 0;
    mix-blend-mode: difference;
    z-index: 1000;
}
body .cursor__ball circle {
    fill: #f7f8fa;
}
    .desc-text{
        max-width: 100%;
    }
    @media screen and (max-width: 570px) {
        .desc-text{
            max-width: 80%;
        }
        .hero-texts{
            position: relative;
            left: -1rem;
        }
    }
    .down-btn{
        width: 3rem;
        height: 3rem;
    }
    button>img{
        width: 2.5rem;
        margin-left: 1rem;
        margin-top: .2rem;
    }
    .contact-btn{
        font-weight: 500;
    }
    .hero{
        background: #241d36;
        top: 0;
        animation: mymove 20s ease infinite;
    }

    @keyframes mymove {
        0% {background-color: #241d36;}
        50% {background-color: #121212;}
        100% {background-color: #241d36;}
    }
    .hero-texts>div>h1{
        font-weight: 700;
        font-size: 3rem;
        line-height: 1.8rem;
    }
    .hero-texts>div>p{
        font-weight: 400;
        font-size: 1.1rem;
    }
    .pink-bg{
        background: var(--pink);
    }

.gb {
  text-transform:uppercase;
  color: transparent;
  background: linear-gradient(to left, #ffffff, #1e5799, #2ce0bf, #76dd2c, #dba62b, #e02cbf, #1e5799, #ffffff);
  background-size: 1000px 100%;
  animation: bg 25s linear infinite;
  background-clip: text;
  -webkit-background-clip: text;
}

@keyframes bg {
  0% {
    background-position-x: 0;
  }
  100% {
    background-position-x: 5000px;
  }
}
</style>
