<script setup>
import HeroSection from "../components/HeroSection.vue";
import CardsComposition from "../components/CardsComposition.vue";
import AboutMe from "../components/AboutMe.vue";
import ContactBox from "../components/ContactBox.vue";
import Decor from "../components/icons/Decor.vue";
</script>

<template lang="pug">
.view
    HeroSection
    .content
        #projects
            .headline Projects
            CardsComposition
        #about
            .headline About Me
            AboutMe
        #contact
            ContactBox
    .decor-one
        Decor
    .decor-two
        Decor
</template>

<style lang="sass" scoped>
@import "../assets/screen.sass"

.view
    position: relative
    overflow: hidden
    z-index: 0

.content
    margin: 0 8%
    display: flex
    flex-direction: column
    position: relative
    z-index: 2

#projects, #about, #contact
    gap: 16px
    display: flex
    padding: 100px 50px
    align-items: center
    flex-direction: column


.decor-one, .decor-two
    position: absolute
    width: 150px
    height: auto
    opacity: 0.7
    z-index: 0
    pointer-events: none

.decor-one
    top: 150vh
    left: 70vw

.decor-two
    top: 280vh
    left: -50vw

.headline
    font-size: 36px
    font-family: 'Montserrat'
    margin-bottom: 40px

+screen-is-xs
    #projects, #about, #contact
        gap: 8px
        padding: 50px 16px

    #contact
        padding: 50px 0 !important
    .headline
        margin-bottom: 20px
        font-size: 30px


+screen-is-md
    #projects, #about, #contact
        padding: 50px 16px
</style>
