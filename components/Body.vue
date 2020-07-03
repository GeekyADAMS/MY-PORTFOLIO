<template>
    <div class="w100 flex-col a-c-n about h-auto   smooth-scroll-wrappe" id="about">

        <div class="flex-row a-c-n space-btw wrap w80 mt-n10">
            <img src="~@/assets/images/pictures/my-pic.svg" alt="Picture of Adams Abdulhakeem" class="dp no-drag mouse-focus" draggable="false">
            <div class="flex-col story-sect">
                <div class="flex-row">
                    <div class="g-line-2"></div>
                    <h2 class="h-color ml-auto no-select"><span class="satisfy" style="font-size: 1rem;">01. </span><span class="anonymous"> My Story</span></h2>
                </div>
                <img src="~@/assets/images/icons/accent 1.svg" alt="underline" class="ml-auto svg-line no-drag" draggable="false">
                <p class="montserrat story-line mt-2 ml-auto">
                    I am a Nigerian (🇳🇬) based Web and Mobile App Developer who has spent the last couple of years, crafting amazing digital products for small, medium and large scale businesses.
                    I am driven by growth and the number of smiles i put on client faces.
                </p>
                <p class="anonymous bright-green mouse-point flex-row a-c mt-3 ml-auto no-select story-cta">See Testimonials <img src="~@/assets/images/icons/arrow-right.svg"  class="ml-p5" alt="right arrow"></p>
            </div>
        </div>

        <div class="flex-row w70 a-c-n space-btw wrap skill-sect mt-5m" id="skills">
            <div class="flex-col">
                <div class="flex-col">
                    <h2 class="h-color no-select"><span class="satisfy" style="font-size: .8rem;">02. </span><span class="anonymous" style="font-size: 1.2rem;"> SKILLS</span></h2>
                    <div class="flex-col mt-2 mb-2">
                        <div class="flex-row a-c-n mouse-point mt-p5" v-for="(skill, index) in profile.skills" :key="index">
                            <div class="g-line-p5 mr-3" v-if="skill.active"></div>
                            <img src="~@/assets/images/icons/dot.svg" alt="list dots" class="no-drag mr-1" v-if="!skill.active">
                            <p :class="{'flex-row a-c anonymous text-2': true, 'light-purple': !skill.active, 'bright-green': skill.active}" @click="selectSkill(index)">{{skill.title}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-col a-c mb-1">
                <img src="~@/assets/images/mockups/UI-Preview.svg" alt="Figma UI Mockup" class="skill-preview no-drag animated fadeInRight mouse-focus" v-if="profile.skills[0].active" data-tilt>
                <img src="~@/assets/images/mockups/js-preview.svg" alt="Javascript Code" class="skill-preview no-drag animated fadeInRight mouse-focus" v-if="profile.skills[1].active" data-tilt>
                <img src="~@/assets/images/mockups/vue-preview.svg" alt="Vue Code" class="skill-preview no-drag animated fadeInRight mouse-focus" v-if="profile.skills[2].active" data-tilt>
                <img src="~@/assets/images/mockups/Node-preview.svg" alt="NodeJS Code" class="skill-preview no-drag animated fadeInRight mouse-focus" v-if="profile.skills[3].active" data-tilt>
                <img src="~@/assets/images/mockups/html-preview.svg" alt="HTML Code" class="skill-preview no-drag animated fadeInRight mouse-focus" v-if="profile.skills[4].active" data-tilt>
                <img src="~@/assets/images/mockups/Python-Preview.svg" alt="Python Code" class="skill-preview no-drag animated fadeInRight mouse-focus" v-if="profile.skills[5].active" data-tilt>
            </div>
        </div>

        <Portfolio />

        <Contact />

        <Footer />
    </div>
</template>

<script>
import Portfolio from '~/components/Portfolio.vue'
import Contact from '~/components/Contact.vue'
import Footer from '~/components/Footer.vue'
export default {
  data () {
    return {
      profile: {
        name: 'Adams Abdulhakeem (GeekyAdams)',
        skills: [
          {
            title: 'Figma (UI/UX)',
            active: true
          },
          {
            title: 'Javascript (ES6+)',
            active: false
          },
          {
            title: 'Vue et. NuxtJS',
            active: false
          },
          {
            title: 'Node JS (Express)',
            active: false
          },
          {
            title: 'HTML et. (S)CSS',
            active: false
          },
          {
            title: 'Python (Data Science/ML)',
            active: false
          }
        ]
      }
    }
  },
  methods: {
    selectSkill (index) {
      this.profile.skills.map(skill => {
        skill.active = false
      })
      this.profile.skills[index].active = true
    }
  },
  components: {
    Portfolio,
    Contact,
    Footer
  }
}
</script>

<style scoped>
@media screen and (max-width: 570px) {
  .mt-n10{
    margin-top: -10rem;
  }
  .story-sect{
    position: relative;
    top: -18rem;
  }
  .skill-sect{
    position: relative;
    top: 8rem;
    right: 1.5rem;
  }
}
.skill-preview{
    max-width: 30rem;
    height: 30rem;
}
.g-line-p5{
    width: 2px;
    height: 1.5rem;
    position: relative;
    left: .35rem;
    background: var(--bright-green);
}
.skill-sect{
    margin-top: -18rem;
}
.story-cta{
    transition: background .7s ease-in-out;
    padding: .5rem .8rem;
    border-radius: 5rem;
    background: rgba(93, 72, 165, .4);
}
.story-cta:hover{
    background: rgba(93, 72, 165, .2);
}
.story-sect{
    margin-top: -2rem;
}
.story-line{
    color: #F3D9F9;
    max-width: 30rem;
}
.svg-line{
    position: relative;
    top: -.5rem;
    left: 1rem;
    height: 15px;
    z-index: 5;
}
.g-line-2{
    width: 6rem;
    height: 2px;
}
h2{
    font-size: 1.5rem;
    font-weight: 600;
    z-index: 10;
}

.h-color{
    color: #5918DF;
}
.dp{
    width: 25rem;
    height: 75rem;
}
.about{
    background: var(--darker-purple);
    border-radius: 30px 30px 0 0;
    position: absolute;
    top: 100vh;
    z-index: 1000;
    max-width: 100vw;
    overflow-x: hidden;
}

</style>
