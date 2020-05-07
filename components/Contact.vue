<template>
    <div class="w100p flex-col a-c contact" id="contact">
        <p class="satisfy light-purple text-2 t-center yarns no-select">Didn't mean to impress you</p>
        <p class="no-select montserrat mt-2 mb-2 contact-header bright-green t-center">LET'S DISCUSS YOUR<br>NEXT PROJECT</p>
        <div class="flex-row mt-2">
            <img src="~@/assets/images/illustrations/circle-1.svg" class="ring ring-1 mb-auto hide-mobile no-drag" alt="white ring">
            <div class="flex-col a-c contact-card curved-edge-5 border-box">
                <p class="hindu light-purple t-center ">I am currently available for new job opportunities and
                would be more than excited to join your team or
                discuss your next project with you. Send me an email to<br> 
                [ drkeeminc@gmail.com ]<br>
                or click the button below to talk to me.</p>
                <a href="mailto:drkeeminc@gmail.com"><button class="hindu fade-9 round-edge-btn bright-green-bg flex-row pad-all-btn contact-btn mouse-point hoverable no-select mt-2" >Talk to me <img src="~@/assets/images/icons/custom-arrow.svg" alt="arrow" class="ml-1 arrow"></button></a>  
            </div>
            <img src="~@/assets/images/illustrations/circle-2.svg" class="ring ring-2 mb-auto hide-mobile no-drag" alt="white ring">
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
@media screen and (max-width: 570px) {
    .yarns{
        margin-top: 5rem;
    }
    .contact-card{
        max-width: 80vw;
    }
}
.arrow{
    width: 4em;
}
.contact-btn{
    width: fit-content;
}
.bright-green-bg{
    background: var(--bright-green);
}
.ring{
    width: 10rem;
    height: 10rem;
    position: relative;
}
.ring-1{
    top: 10rem;
    right: -3rem;
}
.ring-2{
    top: -5rem;
    left: -3rem;
}
.contact-card{
    padding: 2rem;
    z-index: 15;
    width: 30rem;
    background: #402F79;
}
.ring-1{
    z-index: 20;
}
.ring-2{
    z-index: 10;
}
.contact{
    background: #0F0326;
    padding: 10rem 0;
}
.contact-header{
    font-weight: 700;
    font-size: 2rem;
}
</style>