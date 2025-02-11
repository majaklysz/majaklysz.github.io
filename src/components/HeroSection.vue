<script setup lang="ts">
import DoubleArrowIcon from "../components/icons/DoubleArrowIcon.vue";
</script>

<template lang="pug">
.hero
    .hero-box
        .hero-box__position Frontend Developer | UX/UI Designer 
        .hero-box__main-title 
            |Creating Seamless User Experiences 
            br
            |Through Code & Design
        .hero-box__name Maja Klysz
    
    .icon 
        DoubleArrowIcon
</template>

<style lang="sass" scoped>
@import "../assets/screen.sass"

.hero
    width: 100vw
    height: 100vh
    display: flex
    text-align: center
    align-items: center
    background-size: cover
    flex-direction: column
    justify-content: center
    background-position: center
    background-repeat: no-repeat
    background-image: linear-gradient(0deg, #00071F 1%, rgba(0, 7, 31, 0) 15%), url('https://s3.amazonaws.com/shecodesio-production/uploads/files/000/156/421/original/pexels-mark-soetebier-9896288.png?1738516855')

.hero-box
    gap: 8px
    display: flex
    align-items: center
    flex-direction: column
    justify-content: center
    padding-left: 20px
    padding-right: 20px

    &__position
        font-size: 20px
        color: var(--orange)

    &__name
        margin-top: 16px
        font-size: 16px
        color: var(--orange)

    &__main-title
        font-size: 32px
        font-weight: 500
        font-family: 'Montserrat'



@keyframes bounce
    0%, 100%
        transform: translateY(0)
    50%
        transform: translateY(-8px)

.icon
    top: 32%
    display: flex
    position: relative
    animation: bounce 1.5s infinite ease-in-out


+screen-is-xs
    .hero-box
        gap: 8px

        &__position
            font-size: 16px

        &__name
            margin-top: 8px
            font-size: 16px

        &__main-title
            font-size: 24px

    br
        display: none

    .hero
        height: 60vh

    .icon
        display: none


+screen-is-sm
    br
        display: block
</style>
