<template>
    <div class="flex-row a-c space-btw w90 mouse">
        <img src="~@/assets/images/logos/my-logo.svg" alt="Logo" id="logo">
        <nav>
            <ul class="flex-row mouse mouse-point">
                <li class="mouse-point"><a href="#skills" class="mouse-point hindu">Skills</a></li>
                <li class="mouse-point"><a href="" class="mouse-point hindu">Portfolio</a></li>
                <li class="mouse-point"><a href="" class="mouse-point hindu">Contact</a></li>
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
