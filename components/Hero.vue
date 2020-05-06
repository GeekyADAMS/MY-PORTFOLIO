<template>
    <div class="hero w100 h100 flex-col a-c-n mouse hide-overflow fixed">
        <Header />
        <div class="hero-texts flex-row flex-col-m w95 h100 ml-13 ml-5-m mt-5 space-btw">
            <div class="flex-col">
                <h1 class="montserrat" id="hero-title">
                    <span class="white" style="z-index:50;">Web &<br>Mobile Dev.</span><br>
                    <span class="pink" style="z-index:10;">UI Designer.</span><br>
                    <span class="bright-green" style="z-index:5;">Project<br>Manager.</span>
                </h1>
                <p class="hindu white mt-3 desc-text">Hi there. You are awesome and i am, well, i am Adams. <wbr> Building the next $billion <span class="pink">DODO inspired solutions.</span></p>

                <div class="flex-row a-c-n hero-btns mt-3">
                    <button class="hindu fade-9 round-edge-btn pink-bg flex-row pad-all-btn contact-btn mouse-focus hoverable" >TALK TO ME <img src="~@/assets/images/icons/custom-arrow.svg" alt="arrow"></button>
                    <a href="#about"><img src="~@/assets/images/icons/down-arrow-btn.svg" alt="down-arrow" class="ml-2 down-btn mouse-focus"></a>
                </div>
            </div>
            <img src="~@/assets/images/illustrations/Coding 1.svg" alt="" class="" data-aos="fade-up">
        </div>
    </div>
</template>

<script>
import Header from '~/components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style scoped>
    .desc-text{
        max-width: 100%;
    }
    @media screen and (max-width: 480px) {
        .desc-text{
            max-width: 80%;
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
