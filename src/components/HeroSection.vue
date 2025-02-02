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
    .project 
        .text My Projects
        .icon 
            DoubleArrowIcon
</template>

<style lang="sass" scoped>
.hero
    width: 100%
    height: 100vh
    display: flex
    text-align: center
    align-items: center
    background-size: cover
    flex-direction: column
    justify-content: center
    background-position: center
    background-repeat: no-repeat
    background-image: linear-gradient(0deg, #00071F 1%, rgba(0, 7, 31, 0) 15%), url('public/images/mountains.svg')

.hero-box
    gap: 8px
    display: flex
    align-items: center
    flex-direction: column
    justify-content: center

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

.project
    gap: 8px
    top: 32%
    display: flex
    font-size: 18px
    flex-direction: row
    justify-content: center
    align-items: center
    position: relative

.icon
    display: flex
    align-items: center
</style>
