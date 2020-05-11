<template>
    <div class="flex-row a-c space-btw w90 mouse">
        <img src="~@/assets/images/logos/my-logo.svg" alt="Logo" id="logo">
        <nav class="">
            <ul class="flex-row mouse mouse-point">
                <li class="mouse-point"><a href="#skills" class="mouse-point hindu hide-mobile">Skills</a></li>
                <li class="mouse-point"><a href="https://drive.google.com/file/d/1U1fVJWyl0xiW4Wa48gNy66RDFhOB0Nhh/view?usp=sharing" class="mouse-point hindu">Resume</a></li>
                <li class="mouse-point"><a href="#contact" class="mouse-point hindu">Contact</a></li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
    #logo{
        width: 8rem;
        height: 5rem;
    }
    ul>li{
        margin-left: 2rem;
        color: var(--pink);
        transition: cursor 1s ease-in;
        font-weight: 500;
    }
    ul>li:hover{
        color: var(--bright-green);
    }
</style>
