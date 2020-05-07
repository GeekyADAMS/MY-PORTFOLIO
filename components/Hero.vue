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
        <div class="hero-texts flex-row flex-col-m w95 h100 ml-13 ml-5-m mt-5 space-btw">
            <div class="flex-col">
                <h1 class="montserrat no-select" id="hero-title">
                    <span class="white" style="z-index:50;">Web &<br>Mobile Dev.</span><br>
                    <span class="pink" style="z-index:10;">UI Designer.</span><br>
                    <span class="bright-green" style="z-index:5;">Project<br>Manager.</span>
                </h1>
                <p class="hindu white mt-3 desc-text">Hi there. You are awesome and i am, well, i am Adams. <wbr> Building the next $billion <span class="pink">DODO inspired solutions.</span></p>

                <div class="flex-row a-c-n hero-btns mt-3">
                    <div class="hindu fade-9 round-edge-btn pink-bg flex-row pad-all-btn contact-btn mouse-focus hoverable" @click="playIntro()"><span style="font-size: 1.1rem;">Hear me out</span> <img src="~@/assets/images/icons/play-circle.svg" alt="arrow mouse-focus" class="ml-1 scale-on-hover"></div>
                    <a href="#about" class=""><img src="~@/assets/images/icons/down-arrow-btn.svg" alt="down-arrow" class="ml-2 down-btn mouse-focus"></a>
                </div>
                <audio src="/audio/Intro.m4a" ref="intro"></audio>
            </div>
            <img src="~@/assets/images/illustrations/Coding 1.svg" alt="" class="no-select no-drag" data-aos="fade-up">
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
        background: var(--purple);
        top: 0;
        z-index: -99;
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
</style>
