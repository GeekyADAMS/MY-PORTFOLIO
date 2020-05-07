<template>
    <div class="footer w100 flex-col a-c" id="footer">
        <p class="t-center ml-auto mr-auto light-purple mt-7 hindu" id="footer">
            Designed and  developed by me, <a href="https://www.twitter.com/CocaCoder" class="light-purple"><u>Abdulhakeem Adams</u></a>, pixel By pixel.<br>
            Voice-over by: <a href="https://instagram.com/keye_writes" class="light-purple"><u>Keye Writes</u></a><br>
            "Anything and Everything is possible!"
        </p>
        <p class="t-center ml-auto mr-auto bright-green mt-1 hindu" id="footer">
            &copy;{{year}} Rights protected.
        </p>
        <div class="flex-row socials foot-soc">
          <a href="https://www.linkedin.cn/in/geeky-adams" target="_blank"><img src="~@/assets/images/icons/linkedin.svg" alt="linkedin icon" class="scale-on-hover"></a>
          <a href="https://www.twitter.com/CocaCoder" target="_blank"><img src="~@/assets/images/icons/twitter.svg" alt="twitter icon" class="scale-on-hover"></a>
          <a href="https://www.github.com/GeekyADAMS" target="_blank"><img src="~@/assets/images/icons/github.svg" alt="github icon" class="scale-on-hover"></a>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      year: null
    }
  },
  created () {
    this.year = new Date().getFullYear()
  }
}
</script>

<style scoped>
.footer{
    background: #0F0326;
    padding-bottom: .5rem;
}
.foot-soc>a>img{
  margin: .6rem;
}
</style>